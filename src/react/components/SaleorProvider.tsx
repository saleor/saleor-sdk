import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import { SaleorSDK } from "../../core";

const SaleorContext = React.createContext<{ api: any; client: any } | null>(
  null
);

export const SaleorProvider: React.FC<{ client: any }> = ({
  client,
  children,
}) => {
  const [context, setContext] = React.useState<{
    api: any;
    client: any;
  } | null>(null);

  React.useEffect(() => {
    const api = SaleorSDK(client);
    setContext({ api, client });
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
