import {
  ApolloClient,
  ApolloQueryResult,
  FetchResult,
  NormalizedCacheObject,
} from "@apollo/client";
import { saleorAuthToken } from "./constants";
import { LOGIN, REGISTER } from "../apollo/mutations";
import { USER } from "../apollo/queries";
import { loginOpts, registerOpts } from "./types";

export interface AuthSDK {
  login: (
    opts: loginOpts
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  logout: () => Promise<ApolloQueryResult<any>[] | null>;
  register: (
    opts: registerOpts
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
}

export const auth = (client: ApolloClient<NormalizedCacheObject>): AuthSDK => {
  /**
   * Authenticates user with email and password.
   *
   * @param email - User's email
   * @param password - User's password
   * @returns Promise resolved with CreateToken type data
   */
  const login = async (opts: loginOpts) => {
    const result = await client.mutate({
      mutation: LOGIN,
      variables: {
        ...opts,
      },
    });

    if (result.data) {
      localStorage.setItem("saleorAuthToken", result.data.tokenCreate.token);
    }

    // NOTE: manual writing result of LOGIN mutation to cache as UserDetails
    // This can probably be done other way because Apollo should be able to handle this
    client.writeQuery({
      query: USER,
      data: {
        me: {
          ...result.data.tokenCreate.user,
        },
      },
    });

    return result;
  };

  /**
   * Clears the localStorage and Apollo store.
   *
   * @returns Apollo's native resetStore method
   */
  const logout = () => {
    localStorage.removeItem(saleorAuthToken);
    return client.resetStore();
  };
  /**
   * Registers user with email and password.
   *
   * @param email - User's email
   * @param password - User's password
   * @param redirectUrl - URL to redirect after registration
   * @param channel - User's channel
   * @returns Promise resolved with AccountRegister type data
   */
  const register = async (opts: registerOpts) =>
    await client.mutate({
      mutation: REGISTER,
      variables: {
        ...opts,
      },
    });

  return { login, logout, register };
};
