import { ApolloQueryResult, ObservableQuery } from "apollo-client";
import { useMemo, useState } from "react";
import { SaleorAPI } from "../../../api";
import { useSaleorClient } from "../../helpers";

// <T extends keyof SaleorAPI>(dataName: T): SaleorAPI[T]

export type ApiMethodParameters<
  G extends keyof SaleorAPI,
  J extends keyof SaleorAPI[G],
  T extends SaleorAPI[G][J]
> = T extends (...args: infer P) => any ? P : never;

export interface Result {
  data: any;
  error: any;
  loading: any;
}

export function makeQuery<
  // TApiGroup extends keyof SaleorAPI,
  // TApiMethod extends keyof SaleorAPI[TApiGroup],
  // TApiMethodInstance extends SaleorAPI[TApiGroup][TApiMethod]
  // TSubscriptionResult extends ReturnType<SaleorAPI[TApiGroup][TApiMethod]>,
  // TObject,
  TQuery,
  TVariables
>(
  createQuery: (
    client: SaleorAPI,
    variables: TVariables
  ) => ObservableQuery<TQuery, TVariables>
) {
  return (
    variables: TVariables
    // ...variables: ApiMethodParameters<TApiGroup, TApiMethod, TApiMethodInstance>
  ) => {
    const saleor = useSaleorClient();
    const [result, setResult] = useState<ApolloQueryResult<TQuery> | Result>({
      data: undefined,
      error: undefined,
      loading: undefined,
    });

    useMemo(() => {
      createQuery(saleor, variables).subscribe(setResult);
      // setResult();
      // const func = saleor[apiGroup][apiMethod];

      // if (typeof func === "function") {
      //   func(variables).subscribe(setResult);
      // }
    }, [saleor, variables]);

    return result;
  };
}
