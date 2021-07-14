import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  fromPromise,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import fetch from "cross-fetch";
import { saleorAuthToken } from "../core/constants";
import { TypedTypePolicies } from "./apollo-helpers";
import { REFRESH_TOKEN } from "./mutations";
import { RefreshTokenMutation, RefreshTokenMutationVariables } from "./types";

let client: ApolloClient<NormalizedCacheObject> | undefined;

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(saleorAuthToken);

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
                localStorage.setItem(
                  "saleorAuthToken",
                  data.tokenRefresh.token
                );
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
  UserDetails: {
    fields: {
      authenticated: {
        read(_, { readField }): boolean {
          return !!readField("id");
        },
      },
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
