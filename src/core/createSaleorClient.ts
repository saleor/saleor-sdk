import { auth } from "./auth";
import { user } from "./user";
import { getState, State } from "./state";
import { createApolloClient } from "../apollo";
import { SaleorClient, SaleorClientOpts } from "./types";

import { createStorage } from "./storage";

export const createSaleorClient = ({
  apiUrl,
  channel,
  autologin = true,
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

  if (autologin) {
    createStorage(autologin);
  }

  return {
    auth: authSDK,
    user: userSDK,
    config: { channel: _channel, setChannel },
    _internal: { apolloClient },
    getState: (): State => getState(apolloClient),
  };
};
