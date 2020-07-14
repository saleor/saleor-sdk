import React, { useEffect, useMemo, useState } from "react";
import { ApolloProvider } from "react-apollo";

import { ApolloCache } from "apollo-cache";
import { ApolloConfigInput } from "../../../types";
import { SaleorManager } from "../../..";
import { SaleorAPI } from "../../../api";
import { SaleorContext } from "../../context";
import { createSaleorCache } from "../../../cache";

import { IProps } from "./types";
import { createSaleorLinks } from "../../../links";
import { createSaleorClient } from "../../../client";

const SaleorProvider: React.FC<IProps> = ({
  apolloConfig: apolloConfigInput,
  config,
  children,
}: IProps) => {
  const apolloConfig: ApolloConfigInput = {
    persistCache: true,
    ...apolloConfigInput,
  };

  const [cache, setCache] = useState<ApolloCache<any> | null>(null);
  const [context, setContext] = useState<SaleorAPI | null>(null);
  const [tokenExpired, setTokenExpired] = useState(false);

  /**
   * Setup Apollo Cache and persist it in local storage by default
   */
  useEffect(() => {
    (async () => {
      const saleorCache = apolloConfig?.cache
        ? apolloConfig.cache
        : await createSaleorCache({
            persistCache: !!apolloConfig?.persistCache,
          });

      setCache(saleorCache);
    })();
  }, []);

  const tokenExpirationCallback = () => {
    setTokenExpired(true);
  };

  /**
   * Setup Apollo Links, Apollo Client and Saleor Manager
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
