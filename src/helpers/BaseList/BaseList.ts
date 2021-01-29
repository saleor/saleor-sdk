import ApolloClient from "apollo-client";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";
import {
  GetBaseList,
  MapQueryData,
  BaseListVariables,
  GetPageInfo,
  GetTotalCount,
  GetBaseListResult,
} from "./types";

abstract class BaseList<TQuery, TObject, TVariables extends BaseListVariables> {
  /**
   * Awaitable promise of the current query
   */
  current: GetBaseListResult<TQuery> | null = null;

  /**
   * Apollo client
   */
  protected client: ApolloClient<any> | undefined = undefined;

  /**
   * List of objects, undefined if the first query is not finished yet
   */
  data: TObject[] | undefined = undefined;

  /**
   * Query variables containing pagination, sorting, etc.
   */
  variables: TVariables | undefined = undefined;

  /**
   * Status of the current query
   */
  public get loading(): boolean {
    return this.current !== null;
  }

  /**
   * PageInfo object holding information about last encountered cursor and
   * ability to fetch next page
   */
  pageInfo: PageInfo | undefined = undefined;

  /**
   * A total count of items in the collection.
   */
  totalCount: number = 0;

  /**
   * Method called to get objects from API
   */
  abstract query: GetBaseList<TQuery, TVariables>;

  /**
   * Function getting PageInfo object from query result
   */
  abstract getPageInfo: GetPageInfo<TQuery>;

  /**
   * Function getting PageInfo object from query result
   */
  abstract getTotalCount: GetTotalCount<TQuery>;

  /**
   * Function mapping query data to list of objects
   */
  abstract mapQueryData: MapQueryData<TQuery, TObject>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  cleanup = () => {
    this.data = undefined;
    this.pageInfo = undefined;
  };

  /**
   * Initialize list by querying first page
   */
  init = async (variables: TVariables): Promise<void> => {
    this.cleanup();
    this.variables = variables;
    this.current = this.query(this.variables);
    const result = await this.current;
    this.current = null;
    this.data = this.mapQueryData(result.data);
    this.pageInfo = this.getPageInfo(result);
    this.totalCount = this.getTotalCount(result);
  };

  /**
   * Get next page of objects
   */
  next = async (): Promise<TObject[]> => {
    if (
      !this.loading &&
      this.data &&
      this.pageInfo?.hasNextPage &&
      this.variables
    ) {
      this.current = this.query({
        ...this.variables,
        after: this.pageInfo?.endCursor,
        first: this.variables.first,
      });
      const result = await this.current;

      this.current = null;
      this.data = [...this.data, ...(this.mapQueryData(result.data) || [])];
      this.pageInfo = this.getPageInfo(result);
      this.totalCount = this.getTotalCount(result);

      return this!.data;
    }

    return this.data || [];
  };
}

export default BaseList;
