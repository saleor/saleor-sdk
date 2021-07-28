import { auth } from "./auth";
import { user } from "./user";
import { getState, State } from "./state";
import { createApolloClient } from "../apollo";
import { SaleorClient, SaleorClientOpts } from "./types";
import { SALEOR_AUTH_TOKEN } from "./constants";
import { LOCAL_STORAGE_EXISTS } from "../constants";

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

  if (autologin && LOCAL_STORAGE_EXISTS) {
    const token = localStorage.getItem(SALEOR_AUTH_TOKEN);

    if (token) {
      authSDK.verifyToken(token);
    }
  }

  return {
    auth: authSDK,
    user: userSDK,
    config: { channel: _channel, setChannel },
    _internal: { apolloClient },
    getState: (): State => getState(apolloClient),
  };
};
