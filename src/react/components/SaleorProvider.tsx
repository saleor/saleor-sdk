import React from "react";
import { Core } from "../../core";

export type SaleorContextType = {
  saleorClient: Core;
};

export const SaleorContext = React.createContext<SaleorContextType | null>(
  null
);

export const SaleorProvider: React.FC<{ saleorClient: Core }> = ({
  saleorClient,
  children,
}) => {
  const [context, setContext] = React.useState<SaleorContextType | null>(null);

  React.useEffect(() => {
    setContext({ saleorClient });
  }, [saleorClient]);

  if (context) {
    return (
      <SaleorContext.Provider value={context}>
        {children}
      </SaleorContext.Provider>
    );
  }

  return null;
};
