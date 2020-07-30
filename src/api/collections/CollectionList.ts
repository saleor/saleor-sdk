import { ApolloQueryResult } from "apollo-client";
import {
  CollectionList as CollectionListQuery,
  CollectionListVariables,
} from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";
import { List } from "../types";

export const COLLECTIONS_PER_API_CALL = 20;

export type GetCollectionListResult = Promise<
  ApolloQueryResult<CollectionListQuery>
>;
export type GetCollectionList = (
  variables: CollectionListVariables
) => GetCollectionListResult;

export class CollectionList
  implements
    List<CollectionListQuery, BaseCollection, CollectionListVariables> {
  current: Promise<ApolloQueryResult<CollectionListQuery>> | null = null;

  data: BaseCollection[] | undefined = undefined;

  getPerCall: number;

  loading: boolean = true;

  pageInfo: PageInfo | undefined = undefined;

  query: GetCollectionList;

  constructor(query: GetCollectionList, getPerCall: number) {
    this.getPerCall = getPerCall || COLLECTIONS_PER_API_CALL;
    this.query = query;
  }

  init = async (
    variables: CollectionListVariables
  ): Promise<CollectionList> => {
    this.current = this.query(variables);
    const result = await this.current;

    this.current = null;
    this.data = result.data.collections?.edges.map(({ node }) => node);
    this.loading = false;
    this.pageInfo = result.data.collections?.pageInfo;

    return this;
  };

  next = async (): Promise<BaseCollection[]> => {
    if (!this.loading && this.data) {
      this.loading = true;

      const result = await this.query({
        after: this.pageInfo?.endCursor,
        first: this.getPerCall,
      });

      this.loading = false;
      this.data = [
        ...this.data,
        ...(result.data.collections?.edges.map(({ node }) => node) || []),
      ];
      this.pageInfo = result.data.collections?.pageInfo;

      return this!.data;
    }

    return this.data || [];
  };
}
