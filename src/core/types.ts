import {
  ApolloClient,
  FetchResult,
  NormalizedCacheObject,
} from "@apollo/client";
import {
  AccountRegisterInput,
  MutationAccountAddressCreateArgs,
  MutationAccountAddressUpdateArgs,
  MutationAccountSetDefaultAddressArgs,
  MutationAccountUpdateArgs,
  MutationExternalAuthenticationUrlArgs,
  MutationPasswordChangeArgs,
  MutationTokenCreateArgs,
  MutationTokenRefreshArgs,
  MutationRequestPasswordResetArgs,
  MutationSetPasswordArgs,
  MutationRequestEmailChangeArgs,
  AccountConfirmMutationVariables,
  MutationExternalLogoutArgs,
  ExternalAuthenticationUrlMutation,
  ExternalLogoutMutation,
  ExternalObtainAccessTokensMutation,
  ExternalRefreshMutation,
  ExternalVerifyMutation,
  LoginMutation,
  RefreshTokenMutation,
  RegisterMutation,
  RequestPasswordResetMutation,
  SetPasswordMutation,
  VerifyTokenMutation,
  PasswordChangeMutation,
  MutationExternalObtainAccessTokensArgs,
} from "../apollo/types";
import { AuthSDK } from "./auth";
import { UserSDK } from "./user";
import { State } from "./state";
import { FetchConfig } from "../apollo";

export interface SaleorClientInternals {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
export interface SaleorClientConfig {
  channel: string;
  autologin: boolean;
  setChannel(channel: string): string;
}
export interface SaleorClient {
  auth: AuthSDK;
  user: UserSDK;
  config: SaleorClientConfig;
  _internal: SaleorClientInternals;
  getState(): State;
}

interface SaleorClientFetchOpts {
  autologin?: boolean;
  fetchOpts?: FetchConfig;
}

export interface SaleorClientOpts {
  apiUrl: string;
  channel: string;
  opts?: SaleorClientFetchOpts;
}

export type SaleorClientMethodsProps = SaleorClientInternals &
  Pick<SaleorClientConfig, "channel">;

// Meethods opts
export type CreateAccountAddressOpts = MutationAccountAddressCreateArgs;
export type ChangePasswordOpts = MutationPasswordChangeArgs;
export type LoginOpts = MutationTokenCreateArgs;
export type RefreshTokenOpts = Pick<MutationTokenRefreshArgs, "csrfToken">;
export type RegisterOpts = AccountRegisterInput;
export type RequestEmailChangeOpts = MutationRequestEmailChangeArgs;
export type RequestPasswordResetOpts = MutationRequestPasswordResetArgs;
export type SetAccountDefaultAddressOpts = MutationAccountSetDefaultAddressArgs;
export type SetPasswordOpts = MutationSetPasswordArgs;
export type UpdateAccountOpts = MutationAccountUpdateArgs;
export type UpdateAccountAddressOpts = MutationAccountAddressUpdateArgs;
export type GetExternalAuthUrlOpts = MutationExternalAuthenticationUrlArgs;
export type GetExternalAccessTokenOpts = MutationExternalObtainAccessTokensArgs;
export type LogoutOpts = Pick<MutationExternalLogoutArgs, "input">;
export type ConfirmAccountOpts = AccountConfirmMutationVariables;

// Meethods results
export type ChangePasswordResult = FetchResult<PasswordChangeMutation>;
export type ChangePasswordData = PasswordChangeMutation["passwordChange"];
export type LoginResult = FetchResult<LoginMutation>;
export type LoginData = LoginMutation["tokenCreate"];
export type LogoutResult = FetchResult<ExternalLogoutMutation> | null;
export type LogoutData = ExternalLogoutMutation["externalLogout"] | null;
export type RefreshTokenResult = FetchResult<RefreshTokenMutation>;
export type RefreshTokenData = RefreshTokenMutation["tokenRefresh"];
export type RegisterResult = FetchResult<RegisterMutation>;
export type RegisterData = RegisterMutation["accountRegister"];
export type RequestPasswordResetResult = FetchResult<
  RequestPasswordResetMutation
>;
export type RequestPasswordResetData = RequestPasswordResetMutation["requestPasswordReset"];
export type SetPasswordResult = FetchResult<SetPasswordMutation>;
export type SetPasswordData = SetPasswordMutation["setPassword"];
export type VerifyTokenResult = FetchResult<VerifyTokenMutation>;
export type VerifyTokenData = VerifyTokenMutation["tokenVerify"];
export type GetExternalAuthUrlResult = FetchResult<
  ExternalAuthenticationUrlMutation
>;
export type GetExternalAuthUrlData = ExternalAuthenticationUrlMutation["externalAuthenticationUrl"];
export type GetExternalAccessTokenResult = FetchResult<
  ExternalObtainAccessTokensMutation
>;
export type GetExternalAccessTokenData = ExternalObtainAccessTokensMutation["externalObtainAccessTokens"];
export type RefreshExternalTokenResult = FetchResult<ExternalRefreshMutation>;
export type RefreshExternalTokenData = ExternalRefreshMutation["externalRefresh"];
export type VerifyExternalTokenResult = FetchResult<ExternalVerifyMutation>;
export type VerifyExternalTokenData = ExternalVerifyMutation["externalVerify"];

export type JWTToken = {
  iat: number;
  iss: string;
  owner: string;
  exp: number;
  token: string;
  email: string;
  type: string;
  user_id: string;
  is_staff: boolean;
};
