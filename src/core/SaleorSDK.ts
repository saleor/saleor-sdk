import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { auth, AuthSDK } from "./auth";

export interface Core {
  auth: AuthSDK;
}

export const SaleorSDK = (
  client: ApolloClient<NormalizedCacheObject>
): Core => {
  const authSDK = auth(client);

  return { auth: authSDK };
};
