import React, { Dispatch, SetStateAction } from "react";
import { Core, SaleorSDK, SaleorSDKConfig } from "../../core";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type SaleorContextType = {
  api: Core;
  client: ApolloClient<NormalizedCacheObject>;
  channel: string;
  setChannel: Dispatch<SetStateAction<string>>;
};

export const SaleorContext = React.createContext<SaleorContextType | null>(
  null
);

export const SaleorProvider: React.FC<{ config: SaleorSDKConfig }> = ({
  config: { apiUrl, channel: initChannel },
  children,
}) => {
  const [context, setContext] = React.useState<SaleorContextType | null>(null);
  const [channel, setChannel] = React.useState(initChannel);

  React.useEffect(() => {
    const saleor = SaleorSDK({ apiUrl, channel });
    setContext({
      api: saleor,
      client: saleor._internal.apolloClient,
      channel,
      setChannel,
    });
  }, [apiUrl, channel]);

  if (context) {
    return (
      <SaleorContext.Provider value={context}>
        {children}
      </SaleorContext.Provider>
    );
  }

  return null;
};
