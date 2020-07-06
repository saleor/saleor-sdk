import React, { useEffect, useMemo, useState } from "react";
import { ApolloProvider } from "react-apollo";

import { ApolloCache } from "apollo-cache";
import { SaleorManager, createSaleorClient, createSaleorLinks } from "../../..";
import { SaleorAPI } from "../../../api";
import { SaleorContext } from "../../context";
import { createSaleorCache } from "../../../cache";

import { IProps } from "./types";

const SaleorProvider: React.FC<IProps> = ({
  apolloConfig,
  config,
  children,
}: IProps) => {
  const [cache, setCache] = useState<ApolloCache<any> | null>(null);
  const [context, setContext] = useState<SaleorAPI | null>(null);
  const [tokenExpired, setTokenExpired] = useState(false);

  /**
   * Persist cache for Apollo in local storage
   */
  useEffect(() => {
    (async () => {
      const saleorCache = apolloConfig?.cache
        ? apolloConfig.cache
        : await createSaleorCache();

      setCache(saleorCache);
    })();
  }, []);

  const tokenExpirationCallback = () => {
    setTokenExpired(true);
  };

  /**
   * Initialize Apollo Links, Apollo Client and Saleor Manager
   */
  const apolloClient = useMemo(() => {
    if (cache) {
      const saleorLinks = apolloConfig?.links
        ? apolloConfig.links
        : createSaleorLinks({
            apiUrl: config.apiUrl,
            tokenExpirationCallback,
          });

      const saleorClient = createSaleorClient(cache, saleorLinks);

      const manager = new SaleorManager(saleorClient, config);

      manager.connect(saleorAPI => setContext({ ...saleorAPI }));

      return saleorClient;
    }
    return undefined;
  }, [cache]);

  useEffect(() => {
    if (tokenExpired) {
      context?.auth.signOut();
      setTokenExpired(false);
    }
  }, [tokenExpired, context]);

  if (apolloClient && context) {
    return (
      <SaleorContext.Provider value={context}>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </SaleorContext.Provider>
    );
  }
  return null;
};

SaleorProvider.displayName = "SaleorProvider";
export { SaleorProvider };
