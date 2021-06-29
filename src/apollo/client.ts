import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { saleorAuthToken } from "./constants";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(saleorAuthToken);

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

export const createSaleorClient = (
  url: string
): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink({
    uri: url,
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
