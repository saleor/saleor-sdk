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
  config: Config
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    uri: config.apiUrl,
    cache: new InMemoryCache(),
  });
};
