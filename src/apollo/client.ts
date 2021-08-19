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
import jwtDecode from "jwt-decode";
import { TypedTypePolicies } from "./apollo-helpers";
import { JWTToken } from "../core";
import { AuthSDK, auth } from "../core/auth";
import { storage } from "../core/storage";

let client: ApolloClient<NormalizedCacheObject>;
let refreshToken: AuthSDK["refreshToken"];

export const autoRefreshFetch = async (
  input: RequestInfo,
  init: RequestInit
): Promise<Response> => {
  if (!client) {
    throw new Error(
      "Could not find Saleor's client instance. Did you forget to call createSaleorClient()?"
    );
  }

  const token = storage.getToken();

  if (JSON.parse(`${init.body}`).operationName === "refreshToken") {
    return fetch(input, init);
  }

  if (token) {
    // auto refresh token before 60 sec until it expires
    const expirationTime = jwtDecode<JWTToken>(token).exp * 1000 - 60000;
    if (Date.now() >= expirationTime) {
      const { data } = await refreshToken();
      if (data?.tokenRefresh?.token) {
        init.headers = {
          ...init.headers,
          authorization: `JWT ${data?.tokenRefresh?.token}`,
        };
      }
    }
  }

  return fetch(input, init);
};

const authLink = setContext((_, { headers }) => {
  const token = storage.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      const isUnAuthenticated = graphQLErrors.some(
        error => error.extensions && error.extensions.code === "UNAUTHENTICATED"
      );

      if (isUnAuthenticated) {
        return fromPromise(
          refreshToken().then(({ data }) => {
            if (data?.tokenRefresh?.token) {
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `JWT ${data?.tokenRefresh?.token}`,
                },
              });
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
    fetch: autoRefreshFetch,
    uri,
    credentials: "include",
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

  /**
   * Refreshing token code should stay under core/auth.ts To get this method available,
   * we need to call "auth()" here. refreshToken mutation doesn't require channel, so it
   * doesn't have to be populated with value.
   */
  refreshToken = auth({ apolloClient: client, channel: "" }).refreshToken;

  return client;
};
