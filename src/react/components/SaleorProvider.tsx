import React from "react";
import { Core, SaleorSDK } from "../../core";
import { ApolloClient } from "@apollo/client";
import { SaleorContext } from "../context";

export const SaleorProvider: React.FC<{ client: ApolloClient<any> }> = ({
  client,
  children,
}) => {
  const [context, setContext] = React.useState<{
    api: Core;
    client: ApolloClient<any>;
  } | null>(null);

  React.useEffect(() => {
    const api = SaleorSDK(client);
    setContext({ api, client });
  }, []);

  if (context) {
    return (
      <SaleorContext.Provider value={context}>
        {children}
      </SaleorContext.Provider>
    );
  }

  return null;
};
