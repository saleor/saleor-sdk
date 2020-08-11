import { ApolloQueryResult } from "apollo-client";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";

export type GetBaseList<TQuery, TVariables> = (
  variables: TVariables
) => Promise<ApolloQueryResult<TQuery>>;

export type MapQueryData<TQuery, TObject> = (
  data: TQuery
) => TObject[] | undefined;

export interface BaseListVariables {
  after?: string | null;
  first: number;
}

export type GetPageInfo<TQuery> = (
  result: ApolloQueryResult<TQuery>
) => PageInfo;
