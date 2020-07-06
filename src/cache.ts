import {
  InMemoryCache,
  defaultDataIdFromObject,
  NormalizedCacheObject,
} from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";

export const createSaleorCache = async () => {
  const saleorCache = new InMemoryCache({
    dataIdFromObject: obj => {
      // eslint-disable-next-line no-underscore-dangle
      if (obj.__typename === "Shop") {
        return "shop";
      }
      return defaultDataIdFromObject(obj);
    },
  });

  await persistCache({
    cache: saleorCache,
    storage: window.localStorage as PersistentStorage<
      PersistedData<NormalizedCacheObject>
    >,
  });

  return saleorCache;
};
