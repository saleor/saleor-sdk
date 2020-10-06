import ApolloClient, { ApolloQueryResult } from "apollo-client";
import { GetBaseDetails, MapQueryData } from "./types";

abstract class BaseDetails<TQuery, TObject, TVariables> {
  /**
   * Awaitable promise of the current query
   */
  current: Promise<ApolloQueryResult<TQuery>> | null = null;

  /**
   * Apollo client
   */
  protected client: ApolloClient<any> | undefined = undefined;

  /**
   * Object, undefined if the initial query is not finished yet
   */
  data: TObject | undefined = undefined;

  /**
   * Query variables containing identifier, name, etc.
   */
  variables: TVariables | undefined = undefined;

  /**
   * Status of the current query
   */

  public get loading(): boolean {
    return this.current !== null;
  }

  /**
   * Method called to get objects from API
   */
  abstract query: GetBaseDetails<TQuery, TVariables>;

  /**
   * Function mapping query data to object
   */
  abstract mapQueryData: MapQueryData<TQuery, TObject>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  cleanup = () => {
    this.data = undefined;
  };

  /**
   * Initialize details by querying it
   */
  init = async (variables: TVariables): Promise<void> => {
    this.cleanup();
    this.variables = variables;
    this.current = this.query(this.variables);
    const result = await this.current;
    this.current = null;
    this.data = this.mapQueryData(result.data);
  };
}

export default BaseDetails;
