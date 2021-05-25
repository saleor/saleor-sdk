import React, { useState, useEffect } from "react";
import { Config } from "../../core/types";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { createSaleorClient } from "../../core/createSaleorClient";
import { SaleorContext, SaleorContextType } from "../context";
import { SaleorSDK } from "../../core";

export interface SaleorProviderProps {
  children: React.ReactElement | React.ReactNode;
  config: Config;
}

export const SaleorProvider: React.FC<SaleorProviderProps> = ({
  config,
  children,
}) => {
  const [client, setClient] = useState<ApolloClient<
    NormalizedCacheObject
  > | null>(null);
  const [context, setContext] = useState<SaleorContextType | null>(null);

  useEffect(() => {
    const client = createSaleorClient(config);
    setClient(client);
    const api = SaleorSDK(client);
    setContext({ api, config });
  }, [config]);

  if (client && context) {
    return (
      <ApolloProvider client={client}>
        <SaleorContext.Provider value={context}>
          {children}
        </SaleorContext.Provider>
      </ApolloProvider>
    );
  }
  return null;
};
