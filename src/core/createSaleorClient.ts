import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { Config } from "./types";

/**
 * @param config - Config for creating apollo client.
 */
export const createSaleorClient = (
  config: Config,
  apolloConfig: ApolloClient<any> | null
): ApolloClient<NormalizedCacheObject> => {
  if (apolloConfig) {
    return new ApolloClient(apolloConfig);
  }

  return new ApolloClient({
    uri: config.apiUrl,
    cache: new InMemoryCache(),
  });
};
