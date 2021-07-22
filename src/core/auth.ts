import { ApolloQueryResult, FetchResult } from "@apollo/client";
import { LOGIN, REFRESH_TOKEN, REGISTER } from "../apollo/mutations";
import { USER } from "../apollo/queries";
import {
  LoginMutation,
  LoginMutationVariables,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
  RegisterMutation,
  RegisterMutationVariables,
} from "../apollo/types";
import { CoreMethodsProps } from "./types";
import { saleorAuthToken } from "./constants";
import { loginOpts, refreshTokenOpts, registerOpts } from "./types";

export interface AuthSDK {
  login: (opts: loginOpts) => Promise<FetchResult<LoginMutation>>;
  logout: () => Promise<ApolloQueryResult<null>[] | null>;
  register: (opts: registerOpts) => Promise<FetchResult<RegisterMutation>>;
  refreshToken: (
    opts?: refreshTokenOpts
  ) => Promise<FetchResult<RefreshTokenMutation>>;
}

export const auth = ({
  apolloClient: client,
  channel,
}: CoreMethodsProps): AuthSDK => {
  /**
   * Authenticates user with email and password.
   *
   * @param opts - Object with user's email and password
   * @returns Promise resolved with CreateToken type data
   */
  const login: AuthSDK["login"] = async opts => {
    const result = await client.mutate<LoginMutation, LoginMutationVariables>({
      mutation: LOGIN,
      variables: {
        ...opts,
      },
    });

    if (result.data?.tokenCreate?.token) {
      localStorage.setItem("saleorAuthToken", result.data.tokenCreate.token);
    }

    // NOTE: manual writing result of LOGIN mutation to cache as UserDetails
    // This can probably be done other way because Apollo should be able to handle this
    client.writeQuery({
      query: USER,
      data: {
        me: {
          ...result?.data?.tokenCreate?.user,
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
   * @param opts - Object with user's data. Email and password are required fields.
   * "channel" can be changed by using first "setChannel" method from api.
   * @returns Promise resolved with AccountRegister type data
   */
  const register: AuthSDK["register"] = async opts =>
    await client.mutate<RegisterMutation, RegisterMutationVariables>({
      mutation: REGISTER,
      variables: {
        input: {
          ...opts,
          channel,
        },
      },
    });

  /**
   * Refresh JWT token. If it fails it will try to take refreshToken
   * from the http-only cookie refreshToken.
   *
   * @param opts - Optional object with csrfToken and refreshToken. csrfToken is required when refreshToken is provided as a cookie.
   */
  const refreshToken: AuthSDK["refreshToken"] = async opts => {
    const result = await client.mutate<
      RefreshTokenMutation,
      RefreshTokenMutationVariables
    >({
      mutation: REFRESH_TOKEN,
      variables: { ...opts },
    });

    if (result.data?.tokenRefresh?.token) {
      localStorage.setItem("saleorAuthToken", result.data.tokenRefresh.token);
    } else {
      if (client) {
        client.resetStore();
      }
    }

    return result;
  };

  return { login, logout, refreshToken, register };
};
