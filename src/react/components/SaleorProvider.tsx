import React from "react";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { createSaleorClient, SaleorSDK } from "../../core";

const SaleorContext = React.createContext<{ api: any; config: any } | null>(
  null
);

export const SaleorProvider: React.FC<{ config: any; apolloConfig: any }> = ({
  config,
  apolloConfig,
  children,
}) => {
  const [client, setClient] = React.useState<ApolloClient<any> | null>(null);
  const [context, setContext] = React.useState<{
    api: any;
    config: any;
  } | null>(null);

  React.useEffect(() => {
    const client = createSaleorClient(config, apolloConfig);
    setClient(client);
    const api = SaleorSDK(client);
    setContext({ api, config });
  }, []);

  if (client && context) {
    return (
      <SaleorContext.Provider value={null}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </SaleorContext.Provider>
    );
  }

  return null;
};
