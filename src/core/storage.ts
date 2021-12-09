import { LOCAL_STORAGE_EXISTS } from "../constants";
import { SALEOR_AUTH_PLUGIN_ID, SALEOR_CSRF_TOKEN } from "./constants";

export let storage: {
  setAuthPluginId: (method: string | null) => void;
  getAuthPluginId: () => string | null;
  setAccessToken: (token: string | null) => void;
  getAccessToken: () => string | null;
  setCSRFToken: (token: string | null) => void;
  getCSRFToken: () => string | null;
  setTokens: (tokens: {
    accessToken: string | null;
    csrfToken: string | null;
  }) => void;
  clear: () => void;
};

export const createStorage = (autologinEnabled: boolean): void => {
  let authPluginId: string | null = LOCAL_STORAGE_EXISTS
    ? localStorage.getItem(SALEOR_AUTH_PLUGIN_ID)
    : null;
  let accessToken: string | null = null;
  let csrfToken: string | null =
    autologinEnabled && LOCAL_STORAGE_EXISTS
      ? localStorage.getItem(SALEOR_CSRF_TOKEN)
      : null;

  const setAuthPluginId = (pluginId: string | null): void => {
    if (LOCAL_STORAGE_EXISTS) {
      if (pluginId) {
        localStorage.setItem(SALEOR_AUTH_PLUGIN_ID, pluginId);
      } else {
        localStorage.removeItem(SALEOR_AUTH_PLUGIN_ID);
      }
    }

    authPluginId = pluginId;
  };

  const setCSRFToken = (token: string | null): void => {
    if (autologinEnabled && LOCAL_STORAGE_EXISTS) {
      if (token) {
        localStorage.setItem(SALEOR_CSRF_TOKEN, token);
      } else {
        localStorage.removeItem(SALEOR_CSRF_TOKEN);
      }
    }

    csrfToken = token;
  };
  const setAccessToken = (token: string | null): void => {
    accessToken = token;
  };

  const getAuthPluginId = (): string | null => authPluginId;
  const getAccessToken = (): string | null => accessToken;
  const getCSRFToken = (): string | null => csrfToken;

  const setTokens = ({
    accessToken,
    csrfToken,
  }: {
    accessToken: string | null;
    csrfToken: string | null;
  }): void => {
    setAccessToken(accessToken);
    setCSRFToken(csrfToken);
  };

  const clear = (): void => {
    setAuthPluginId(null);
    setAccessToken(null);
    setCSRFToken(null);
  };

  storage = {
    setAuthPluginId,
    setAccessToken,
    setCSRFToken,
    getAuthPluginId,
    getAccessToken,
    getCSRFToken,
    setTokens,
    clear,
  };
};
