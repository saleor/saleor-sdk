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
  let _token: string | null;

  const setChannel = (channel: string): string => {
    _channel = channel;
    return _channel;
  };

  const setToken = (token: string | null): void => {
    if (autologin && LOCAL_STORAGE_EXISTS) {
      if (token) {
        localStorage.setItem(SALEOR_AUTH_TOKEN, token);
      } else {
        localStorage.removeItem(SALEOR_AUTH_TOKEN);
      }
    } else {
      _token = token;
    }
  };

  const getToken = (): string | null => {
    if (autologin && LOCAL_STORAGE_EXISTS) {
      return localStorage.getItem(SALEOR_AUTH_TOKEN);
    }
    return _token;
  };

  const apolloClient = createApolloClient(apiUrl);
  const coreInternals = { apolloClient, channel: _channel, setToken, getToken };
  const authSDK = auth(coreInternals);
  const userSDK = user(coreInternals);

  if (autologin && LOCAL_STORAGE_EXISTS) {
    const token = getToken();

    if (token) {
      authSDK.verifyToken(token);
    }
  }

  return {
    auth: authSDK,
    user: userSDK,
    config: { channel: _channel, setChannel },
    _internal: { apolloClient, setToken, getToken },
    getState: (): State => getState(apolloClient),
  };
};
