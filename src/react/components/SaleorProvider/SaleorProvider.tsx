import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import { SaleorManager } from "../../..";
import { SaleorContext, SaleorContextType } from "../../context";

import { IProps } from "./types";

const SaleorProvider: React.FC<IProps> = ({
  apolloConfig,
  config,
  children,
}: IProps) => {
  const [context, setContext] = useState<SaleorContextType | null>(null);
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  const getSaleorApiAndClient = async (manager: SaleorManager) => {
    const { api, apolloClient } = await manager.connect(saleorAPI => {
      if (saleorAPI) {
        setContext({ api: saleorAPI, config });
      }
    });
    setContext({ api, config });
    setClient(apolloClient);
  };

  useEffect(() => {
    const manager = new SaleorManager(config, apolloConfig);

    getSaleorApiAndClient(manager);
  }, []);

  if (client && context) {
    return (
      <SaleorContext.Provider value={context}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </SaleorContext.Provider>
    );
  }
  return null;
};

SaleorProvider.displayName = "SaleorProvider";
export { SaleorProvider };
