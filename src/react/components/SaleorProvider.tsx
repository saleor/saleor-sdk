import React from "react";
import { Core, SaleorSDK } from "../../core";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { SaleorContext } from "../context";

export const SaleorProvider: React.FC<{
  client: ApolloClient<NormalizedCacheObject>;
}> = ({ client, children }) => {
  const [context, setContext] = React.useState<{
    api: Core;
    client: ApolloClient<NormalizedCacheObject>;
  } | null>(null);

  React.useEffect(() => {
    const api = SaleorSDK(client);
    setContext({ api, client });
  }, [client]);

  if (context) {
    return (
      <SaleorContext.Provider value={context}>
        {children}
      </SaleorContext.Provider>
    );
  }

  return null;
};
