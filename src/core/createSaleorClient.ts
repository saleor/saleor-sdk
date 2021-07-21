import { auth } from "./auth";
import { createApolloClient } from "../apollo";
import { SaleorClient, SaleorClientOpts } from "./types";
import { checkout } from "./checkout";

export const createSaleorClient = ({
  apiUrl,
  channel,
}: SaleorClientOpts): SaleorClient => {
  let _channel = channel;

  const setChannel = (channel: string): string => {
    _channel = channel;
    return _channel;
  };

  const apolloClient = createApolloClient(apiUrl);
  const coreInternals = { apolloClient, channel: _channel };
  const authSDK = auth(coreInternals);
  const checkoutSDK = checkout(coreInternals);

  return {
    auth: authSDK,
    checkout: checkoutSDK,
    config: { channel: _channel, setChannel },
    _internal: { apolloClient },
  };
};
