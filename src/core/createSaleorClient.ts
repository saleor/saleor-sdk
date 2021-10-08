import { auth } from "./auth";
import { user } from "./user";
import { getState, State } from "./state";
import { createApolloClient } from "../apollo";
import { SaleorClient, SaleorClientOpts } from "./types";

import { createStorage, storage } from "./storage";
import { DEVELOPMENT_MODE, WINDOW_EXISTS } from "../constants";

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

  createStorage(autologin);
  const apolloClient = createApolloClient(apiUrl, autologin);
  const coreInternals = { apolloClient, channel: _channel };
  const authSDK = auth(coreInternals);
  const userSDK = user(coreInternals);

  if (autologin) {
    const csrfToken = storage.getCSRFToken();

    if (csrfToken) {
      authSDK.refreshToken(true);
    }
  }

  const client = {
    auth: authSDK,
    user: userSDK,
    config: { channel: _channel, setChannel, autologin },
    _internal: { apolloClient },
    getState: (): State => getState(apolloClient),
  };

  if (DEVELOPMENT_MODE && WINDOW_EXISTS) {
    (window as any).__SALEOR_CLIENT__ = client;
  }

  return client;
};
