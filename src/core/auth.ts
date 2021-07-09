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
import { LoginMutation, RegisterMutation } from "../apollo/types";

export interface AuthSDK {
  login: (opts: loginOpts) => Promise<FetchResult<LoginMutation>>;
  logout: () => Promise<ApolloQueryResult<null>[] | null>;
  register: (opts: registerOpts) => Promise<FetchResult<RegisterMutation>>;
}

export const auth = (client: ApolloClient<NormalizedCacheObject>): AuthSDK => {
  /**
   * Authenticates user with email and password.
   *
   * @param opts - Object with user's email and password
   * @returns Promise resolved with CreateToken type data
   */
  const login: AuthSDK["login"] = async opts => {
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
        authenticated: !!result?.data?.tokenCreate?.user?.id,
      },
    });

    return result;
  };

  /**
   * Clears the localStorage and Apollo store.
   *
   * @returns Apollo's native resetStore method
   */
  const logout: AuthSDK["logout"] = () => {
    localStorage.removeItem(saleorAuthToken);
    return client.resetStore();
  };

  /**
   * Registers user with email and password.
   *
   * @param opts - Object with user's data. Email, password, redirectUrl and channel are required fields.
   * @returns Promise resolved with AccountRegister type data
   */
  const register: AuthSDK["register"] = async opts =>
    await client.mutate({
      mutation: REGISTER,
      variables: {
        ...opts,
      },
    });

  return { login, logout, register };
};
