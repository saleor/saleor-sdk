import { LOCAL_STORAGE_EXISTS } from "../constants";
import { SALEOR_CSRF_TOKEN } from "./constants";

export let storage: {
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
  let accessToken: string | null = null;
  let csrfToken: string | null =
    autologinEnabled && LOCAL_STORAGE_EXISTS
      ? localStorage.getItem(SALEOR_CSRF_TOKEN)
      : null;

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
    accessToken = null;
    csrfToken = null;
  };

  storage = {
    setAccessToken,
    setCSRFToken,
    getAccessToken,
    getCSRFToken,
    setTokens,
    clear,
  };
};
