import {
  InMemoryCache,
  defaultDataIdFromObject,
  NormalizedCacheObject,
} from "apollo-cache-inmemory";
import { persistCache as apolloPersistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import { LOCAL_STORAGE_EXISTS } from "./consts";

interface SaleorCacheConfig {
  /**
   * Determines if the cache has to be persisted in local storage. False by default.
   */
  persistCache?: boolean;
}

/**
 * Creates cache for Apollo client.
 * @param cacheConfig Configuration for created cache.
 */
export const createSaleorCache = async ({
  persistCache = false,
}: SaleorCacheConfig) => {
  const saleorCache = new InMemoryCache({
    dataIdFromObject: obj => {
      // eslint-disable-next-line no-underscore-dangle
      if (obj.__typename === "Shop") {
        return "shop";
      }
      return defaultDataIdFromObject(obj);
    },
  });

  if (persistCache && LOCAL_STORAGE_EXISTS) {
    await apolloPersistCache({
      cache: saleorCache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    });
  }

  return saleorCache;
};
