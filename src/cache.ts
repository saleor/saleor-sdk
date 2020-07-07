import {
  InMemoryCache,
  defaultDataIdFromObject,
  NormalizedCacheObject,
} from "apollo-cache-inmemory";
import { persistCache as apolloPersistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";

interface SaleorCacheConfig {
  persistCache?: boolean;
}

export const createSaleorCache = async (
  { persistCache }: SaleorCacheConfig = { persistCache: true }
) => {
  const saleorCache = new InMemoryCache({
    dataIdFromObject: obj => {
      // eslint-disable-next-line no-underscore-dangle
      if (obj.__typename === "Shop") {
        return "shop";
      }
      return defaultDataIdFromObject(obj);
    },
  });

  if (persistCache) {
    await apolloPersistCache({
      cache: saleorCache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    });
  }

  return saleorCache;
};
