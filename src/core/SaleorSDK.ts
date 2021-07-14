import { auth } from "./auth";
import { createSaleorClient } from "../apollo";
import { Core, SaleorSDKConfig } from "./types";

export const SaleorSDK = ({ apiUrl, channel }: SaleorSDKConfig): Core => {
  let _channel = channel;
  const setChannel = (channel: string): string => {
    _channel = channel;
    return _channel;
  };

  const apolloClient = createSaleorClient(apiUrl);
  const coreInternals = { apolloClient, channel: _channel };
  const authSDK = auth(coreInternals);

  return {
    auth: authSDK,
    config: { channel: _channel, setChannel },
    _internal: { apolloClient },
  };
};
