import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { TypedTypePolicies } from "./apollo-helpers";
import { saleorAuthToken } from "../core/constants";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(saleorAuthToken);

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const typePolicies: TypedTypePolicies = {
  UserDetails: {
    fields: {
      authenticated: {
        read(_, { readField }): boolean {
          return !!readField("id");
        },
      },
    },
  },
};

const cache = new InMemoryCache({
  typePolicies,
});

export const createSaleorClient = (
  url: string
): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink({
    uri: url,
  });

  return new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
  });
};
