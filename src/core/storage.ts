import { LOCAL_STORAGE_EXISTS } from "../constants";
import { SALEOR_AUTH_TOKEN } from "./constants";

export let storage: {
  setToken: (token: string | null) => void;
  getToken: () => void;
};

export const createStorage = (autologinEnabled: boolean) => {
  let _token: string | null;

  const setToken = (token: string | null): void => {
    if (autologinEnabled && LOCAL_STORAGE_EXISTS) {
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
    if (autologinEnabled && LOCAL_STORAGE_EXISTS) {
      return localStorage.getItem(SALEOR_AUTH_TOKEN);
    }
    return _token;
  };

  storage = { setToken, getToken };

  // TODO: Uncomment when we are able to pass storage to createSaleorClient
  // return { setToken, getToken };
};
