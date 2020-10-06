import { ApolloQueryResult } from "apollo-client";

export type GetBaseDetails<TQuery, TVariables> = (
  variables: TVariables
) => Promise<ApolloQueryResult<TQuery>>;

export type MapQueryData<TQuery, TObject> = (
  data: TQuery
) => TObject | undefined;
