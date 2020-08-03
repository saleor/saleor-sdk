import { ApolloQueryResult } from "apollo-client";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";
import {
  GetBaseList,
  MapQueryData,
  BaseListVariables,
  GetPageInfo,
} from "./types";

abstract class BaseList<TQuery, TObject> {
  current: Promise<ApolloQueryResult<TQuery>> | null = null;

  data: TObject[] | undefined = undefined;

  getPerCall: number;

  loading: boolean = false;

  pageInfo: PageInfo | undefined = undefined;

  query: GetBaseList<TQuery, BaseListVariables>;

  abstract getPageInfo: GetPageInfo<TQuery>;

  abstract mapQueryData: MapQueryData<TQuery, TObject>;

  constructor(
    query: GetBaseList<TQuery, BaseListVariables>,
    getPerCall: number
  ) {
    this.getPerCall = getPerCall;
    this.query = query;
  }

  init = async (variables: BaseListVariables): Promise<void> => {
    this.loading = true;

    this.current = this.query(variables);
    const result = await this.current;

    this.current = null;
    this.data = this.mapQueryData(result.data);
    this.loading = false;
    this.pageInfo = this.getPageInfo(result);
  };

  next = async (): Promise<TObject[]> => {
    if (!this.loading && this.data) {
      this.loading = true;

      this.current = this.query({
        after: this.pageInfo?.endCursor,
        first: this.getPerCall,
      });
      const result = await this.current;

      this.current = null;
      this.loading = false;
      this.data = [...this.data, ...(this.mapQueryData(result.data) || [])];
      this.pageInfo = this.getPageInfo(result);

      return this!.data;
    }

    return this.data || [];
  };
}

export default BaseList;
