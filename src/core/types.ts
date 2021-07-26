import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  AccountRegisterInput,
  MutationAccountAddressCreateArgs,
  MutationAccountAddressUpdateArgs,
  MutationAccountSetDefaultAddressArgs,
  MutationAccountUpdateArgs,
  MutationPasswordChangeArgs,
  MutationTokenCreateArgs,
  MutationTokenRefreshArgs,
  MutationRequestPasswordResetArgs,
  MutationSetPasswordArgs,
  MutationRequestEmailChangeArgs,
} from "../apollo/types";
import { AuthSDK } from "./auth";
import { UserSDK } from "./user";
import { State } from "./state";

export interface CoreInternals {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
export interface CoreConfig {
  channel: string;
  setChannel(channel: string): string;
}
export interface SaleorClient {
  auth: AuthSDK;
  user: UserSDK;
  config: CoreConfig;
  _internal: CoreInternals;
  getState(): State;
}

export interface SaleorClientOpts {
  apiUrl: string;
  channel: string;
}

export type CoreMethodsProps = Pick<CoreInternals, "apolloClient"> &
  Pick<CoreConfig, "channel">;

export type CreateAccountAddressOpts = MutationAccountAddressCreateArgs;
export type ChangeUserPasswordOpts = MutationPasswordChangeArgs;
export type LoginOpts = MutationTokenCreateArgs;
export type RefreshTokenOpts = MutationTokenRefreshArgs;
export type RegisterOpts = AccountRegisterInput;
export type RequestEmailChangeOpts = MutationRequestEmailChangeArgs;
export type RequestPasswordResetOpts = MutationRequestPasswordResetArgs;
export type SetAccountDefaultAddressOpts = MutationAccountSetDefaultAddressArgs;
export type SetPasswordOpts = MutationSetPasswordArgs;
export type UpdateAccountOpts = MutationAccountUpdateArgs;
export type UpdateAccountAddressOpts = MutationAccountAddressUpdateArgs;
