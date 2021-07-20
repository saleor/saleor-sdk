import React from "react";
import { SaleorClient } from "../../core";

export type SaleorContextType = {
  client: SaleorClient;
};

export const SaleorContext = React.createContext<SaleorClient | null>(null);

export const SaleorProvider: React.FC<{ client: SaleorClient }> = ({
  client,
  children,
}) => {
  const [context, setContext] = React.useState<SaleorClient>(client);

  React.useEffect(() => {
    setContext(client);
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
