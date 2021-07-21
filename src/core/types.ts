import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  AccountRegisterInput,
  AddCheckoutLinesMutationVariables,
  CheckoutCreateInput,
  MutationTokenCreateArgs,
  MutationTokenRefreshArgs,
} from "../apollo/types";
import { AuthSDK } from "./auth";
import { CheckoutSDK } from "./checkout";

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
  checkout: CheckoutSDK;
  config: CoreConfig;
  _internal: CoreInternals;
}

export interface SaleorClientOpts {
  apiUrl: string;
  channel: string;
}

export type registerOpts = AccountRegisterInput;
export type loginOpts = MutationTokenCreateArgs;
export type refreshTokenOpts = MutationTokenRefreshArgs;

export type createCheckoutOpts = CheckoutCreateInput;
export type addLinesCheckoutOpts = AddCheckoutLinesMutationVariables;
