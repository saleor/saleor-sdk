import { makeVar } from "@apollo/client";

import { LOCAL_STORAGE_EXISTS } from "../constants";
import { SALEOR_AUTH_TOKEN } from "./constants";

export let storage: {
  setToken: (token: string | null) => void;
  getToken: () => string | null;
};

export const createStorage = (autologinEnabled: boolean): void => {
  const reactiveToken = makeVar<string | null>(
    autologinEnabled && LOCAL_STORAGE_EXISTS
      ? localStorage.getItem(SALEOR_AUTH_TOKEN)
      : null
  );

  const setToken = (token: string | null): void => {
    if (autologinEnabled && LOCAL_STORAGE_EXISTS) {
      if (token) {
        localStorage.setItem(SALEOR_AUTH_TOKEN, token);
      } else {
        localStorage.removeItem(SALEOR_AUTH_TOKEN);
      }
    }

    reactiveToken(token);
  };

  const getToken = (): string | null => reactiveToken();

  storage = {
    setToken,
    getToken,
  };
};
