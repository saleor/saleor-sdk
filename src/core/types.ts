import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  AccountRegisterInput,
  MutationTokenCreateArgs,
  MutationTokenRefreshArgs,
} from "../apollo/types";
import { AuthSDK } from "./auth";

export interface CoreInternals {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
export interface CoreConfig {
  channel: string;
  setChannel(channel: string): string;
}

export type CoreMethodsProps = Pick<CoreInternals, "apolloClient"> &
  Pick<CoreConfig, "channel">;

export interface SaleorClient {
  auth: AuthSDK;
  config: CoreConfig;
  _internal: CoreInternals;
}

export interface SaleorSDKConfig {
  apiUrl: string;
  channel: string;
}

export type registerOpts = AccountRegisterInput;
export type loginOpts = MutationTokenCreateArgs;
export type refreshTokenOpts = MutationTokenRefreshArgs;
