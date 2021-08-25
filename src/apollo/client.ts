import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  fromPromise,
  ApolloLink,
  NormalizedCacheObject,
  Reference,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import fetch from "cross-fetch";
import { TypedTypePolicies } from "./apollo-helpers";
import { REFRESH_TOKEN } from "./mutations";
import { RefreshTokenMutation, RefreshTokenMutationVariables } from "./types";
import { storage } from "../core/storage";

let client: ApolloClient<NormalizedCacheObject> | undefined;

export const authLink = setContext((_, { headers }) => {
  const token = storage.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      const isUnAuthenticated = graphQLErrors.some(
        error => error.extensions && error.extensions.code === "UNAUTHENTICATED"
      );

      if (client && isUnAuthenticated) {
        return fromPromise(
          client
            .mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
              mutation: REFRESH_TOKEN,
            })
            .then(({ data }) => {
              if (data?.tokenRefresh?.token) {
                storage.setToken(data.tokenRefresh.token);
                const oldHeaders = operation.getContext().headers;
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `JWT ${data.tokenRefresh.token}`,
                  },
                });
              } else if (client) {
                client.resetStore();
              }
            })
        )
          .filter(Boolean)
          .flatMap(() => forward(operation));
      }

      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }

    return;
  }
);

const createLink = (uri: string): ApolloLink => {
  const httpLink = createHttpLink({
    fetch,
    uri,
  });

  return ApolloLink.from([errorLink, authLink, httpLink]);
};

const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      authenticated: {
        read(_, { readField, toReference }): boolean {
          return !!readField(
            "id",
            toReference({
              __typename: "User",
            })
          );
        },
      },
      me: {
        read(_, { toReference, canRead }): Reference | undefined | null {
          const ref = toReference({
            __typename: "User",
          });

          return canRead(ref) ? ref : null;
        },
      },
      token: {
        read(): string | null {
          return storage.getToken();
        },
      },
      authenticating: {
        read(value = false): boolean {
          return value;
        },
      },
    },
  },
  User: {
    /**
     * IMPORTANT
     * This works as long as we have 1 User cache object which is the current logged in User.
     * If the client should ever fetch additional Users, this should be removed
     * and the login methods (token create or verify) should be responsible for writing USER query cache manually.
     */
    keyFields: [],
    fields: {
      addresses: {
        merge: false,
      },
    },
  },
};

export const cache = new InMemoryCache({
  typePolicies,
});

export const createApolloClient = (
  apiUrl: string
): ApolloClient<NormalizedCacheObject> => {
  client = new ApolloClient({
    cache,
    link: createLink(apiUrl),
  });

  return client;
};
