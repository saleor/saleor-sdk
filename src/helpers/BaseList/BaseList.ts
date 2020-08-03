import { ApolloQueryResult } from "apollo-client";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";
import {
  GetBaseList,
  MapQueryData,
  BaseListVariables,
  GetPageInfo,
} from "./types";

abstract class BaseList<TQuery, TObject> {
  /**
   * Awaitable promise of the current query
   */
  current: Promise<ApolloQueryResult<TQuery>> | null = null;

  /**
   * List of objects, undefined if the first query is not finished yet
   */
  data: TObject[] | undefined = undefined;

  /**
   * Page size
   */
  getPerCall: number;

  /**
   * Status of the current query
   */
  loading: boolean = false;

  /**
   * PageInfo object holding information about last encountered cursor and
   * ability to fetch next page
   */
  pageInfo: PageInfo | undefined = undefined;

  /**
   * Method called to get objects from API
   */
  query: GetBaseList<TQuery, BaseListVariables>;

  /**
   * Function getting PageInfo object from query result
   */
  abstract getPageInfo: GetPageInfo<TQuery>;

  /**
   * Function mapping query data to list of objects
   */
  abstract mapQueryData: MapQueryData<TQuery, TObject>;

  constructor(
    query: GetBaseList<TQuery, BaseListVariables>,
    getPerCall: number
  ) {
    this.getPerCall = getPerCall;
    this.query = query;
  }

  /**
   * Initialize list by querying first page
   * @param variables Query variables containing pagination, sorting, etc.
   */
  init = async (variables: BaseListVariables): Promise<void> => {
    this.loading = true;

    this.current = this.query(variables);
    const result = await this.current;

    this.current = null;
    this.data = this.mapQueryData(result.data);
    this.loading = false;
    this.pageInfo = this.getPageInfo(result);
  };

  /**
   * Get next page of objects
   */
  next = async (): Promise<TObject[]> => {
    if (!this.loading && this.data && this.pageInfo?.hasNextPage) {
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
