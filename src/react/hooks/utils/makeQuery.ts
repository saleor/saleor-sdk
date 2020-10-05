import { ApolloQueryResult, ObservableQuery } from "apollo-client";
import { useMemo, useState } from "react";
import { SaleorAPI } from "../../../api";
import { useSaleorClient } from "../../helpers";

export type QueryResult<TQuery> = Partial<
  Exclude<ApolloQueryResult<TQuery>, "loading">
> &
  Pick<ApolloQueryResult<TQuery>, "loading">;

export function makeQuery<TQuery, TVariables>(
  createQuery: (
    client: SaleorAPI,
    variables: TVariables
  ) => ObservableQuery<TQuery, TVariables>
) {
  return (variables: TVariables) => {
    const saleor = useSaleorClient();
    const [result, setResult] = useState<QueryResult<TQuery>>({
      loading: true,
    });

    useMemo(() => {
      createQuery(saleor, variables).subscribe(value => {
        setResult(value);
      });
    }, [saleor]);

    return result;
  };
}
