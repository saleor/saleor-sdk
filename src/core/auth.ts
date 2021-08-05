import { ApolloQueryResult, FetchResult } from "@apollo/client";
import {
  CHANGE_USER_PASSWORD,
  LOGIN,
  REQUEST_PASSWORD_RESET,
  REFRESH_TOKEN,
  REGISTER,
  SET_PASSWORD,
  VERIFY_TOKEN,
} from "../apollo/mutations";
import {
  LoginMutation,
  LoginMutationVariables,
  PasswordChangeMutation,
  PasswordChangeMutationVariables,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
  RegisterMutation,
  RegisterMutationVariables,
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables,
  SetPasswordMutation,
  SetPasswordMutationVariables,
  VerifyTokenMutation,
  VerifyTokenMutationVariables,
} from "../apollo/types";
import { SaleorClientMethodsProps } from "./types";
import {
  ChangeUserPasswordOpts,
  LoginOpts,
  RefreshTokenOpts,
  RegisterOpts,
  RequestPasswordResetOpts,
  SetPasswordOpts,
} from "./types";
import { storage } from "./storage";

export interface AuthSDK {
  changePassword: (
    opts: ChangeUserPasswordOpts
  ) => Promise<FetchResult<PasswordChangeMutation>>;
  login: (opts: LoginOpts) => Promise<FetchResult<LoginMutation>>;
  logout: () => Promise<ApolloQueryResult<null>[] | null>;
  refreshToken: (
    opts?: RefreshTokenOpts
  ) => Promise<FetchResult<RefreshTokenMutation>>;
  register: (opts: RegisterOpts) => Promise<FetchResult<RegisterMutation>>;
  requestPasswordReset: (
    opts: RequestPasswordResetOpts
  ) => Promise<FetchResult<RequestPasswordResetMutation>>;
  setPassword: (
    opts: SetPasswordOpts
  ) => Promise<FetchResult<SetPasswordMutation>>;
  verifyToken: (token: string) => Promise<FetchResult<VerifyTokenMutation>>;
}

export const auth = ({
  apolloClient: client,
  channel,
}: SaleorClientMethodsProps): AuthSDK => {
  /**
   * Authenticates user with email and password.
   *
   * @param opts - Object with user's email and password.
   * @returns Promise resolved with CreateToken type data.
   */
  const login: AuthSDK["login"] = async opts => {
    const result = await client.mutate<LoginMutation, LoginMutationVariables>({
      mutation: LOGIN,
      variables: {
        ...opts,
      },
    });

    if (result.data?.tokenCreate?.token) {
      storage.setToken(result.data.tokenCreate.token);
    }

    return result;
  };

  /**
   * Clears stored token and Apollo store.
   *
   * @returns Apollo's native resetStore method.
   */
  const logout: AuthSDK["logout"] = () => {
    storage.setToken(null);
    return client.resetStore();
  };

  /**
   * Registers user with email and password.
   *
   * @param opts - Object with user's data. Email and password are required fields.
   * "channel" can be changed by using first "setChannel" method from api.
   * @returns Promise resolved with AccountRegister type data.
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
   * Refresh JWT token. Mutation will try to take refreshToken from the function's arguments.
   * If it fails, it will try to use refreshToken from the http-only cookie called refreshToken.
   *
   * @param opts - Optional object with csrfToken and refreshToken. csrfToken is required when refreshToken is provided as a cookie.
   * @returns Authorization token.
   */
  const refreshToken: AuthSDK["refreshToken"] = async opts => {
    const result = await client.mutate<
      RefreshTokenMutation,
      RefreshTokenMutationVariables
    >({
      mutation: REFRESH_TOKEN,
      variables: {
        csrfToken: opts?.csrfToken,
        refreshToken: opts?.refreshToken,
      },
    });
    if (result.data?.tokenRefresh?.token) {
      storage.setToken(result.data.tokenRefresh.token);
    } else {
      storage.setToken(null);
      client.resetStore();
    }

    return result;
  };

  /**
   * Verify JWT token.
   *
   * @param token - Token value.
   * @returns User assigned to token and the information if the token is valid or not.
   */
  const verifyToken: AuthSDK["verifyToken"] = async token => {
    const result = await client.mutate<
      VerifyTokenMutation,
      VerifyTokenMutationVariables
    >({
      mutation: VERIFY_TOKEN,
      variables: { token },
    });

    if (!result.data?.tokenVerify?.isValid) {
      storage.setToken(null);
    }

    return result;
  };

  /**
   * Change the password of the logged in user.
   *
   * @param opts - Object with password and new password.
   * @returns Errors if the passoword change has failed.
   */
  const changePassword: AuthSDK["changePassword"] = async opts => {
    const result = await client.mutate<
      PasswordChangeMutation,
      PasswordChangeMutationVariables
    >({
      mutation: CHANGE_USER_PASSWORD,
      variables: { ...opts },
    });

    return result;
  };

  /**
   * Sends an email with the account password modification link.
   *
   * @param opts - Object with slug of a channel which will be used for notify user,
   * email of the user that will be used for password recovery and URL of a view
   * where users should be redirected to reset the password. URL in RFC 1808 format.
   *
   * @returns Errors if there were some.
   */
  const requestPasswordReset: AuthSDK["requestPasswordReset"] = async opts => {
    const result = await client.mutate<
      RequestPasswordResetMutation,
      RequestPasswordResetMutationVariables
    >({
      mutation: REQUEST_PASSWORD_RESET,
      variables: { ...opts },
    });

    return result;
  };

  /**
   * Sets the user's password from the token sent by email.
   *
   * @param opts - Object with user's email, password and one-time token required to set the password.
   * @returns User instance, JWT token, JWT refresh token and CSRF token.
   */
  const setPassword: AuthSDK["setPassword"] = async opts => {
    const result = await client.mutate<
      SetPasswordMutation,
      SetPasswordMutationVariables
    >({
      mutation: SET_PASSWORD,
      variables: { ...opts },
    });

    return result;
  };

  return {
    changePassword,
    login,
    logout,
    refreshToken,
    register,
    requestPasswordReset,
    setPassword,
    verifyToken,
  };
};
