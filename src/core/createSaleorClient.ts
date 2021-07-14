import { auth } from "./auth";
import { user } from "./user";
import { createApolloClient } from "../apollo";
import { SaleorClient, SaleorClientOpts } from "./types";

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
  const userSDK = user(coreInternals);

  return {
    auth: authSDK,
    user: userSDK,
    config: { channel: _channel, setChannel },
    _internal: { apolloClient },
  };
};
