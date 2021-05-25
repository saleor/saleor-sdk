import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import { testQuery } from "../apollo/queries";

export interface AuthSDK {
  test: () => Promise<ApolloQueryResult<any>>;
}

export const auth = (client: ApolloClient<NormalizedCacheObject>): AuthSDK => {
  const test = (): Promise<ApolloQueryResult<any>> => {
    return client.query({
      query: testQuery,
    });
  };

  return { test };
};
