import ApolloClient from "apollo-client";
import {
  CollectionList as CollectionListQuery,
  CollectionListVariables,
} from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
import { WithList } from "../types";
import { CollectionList } from "./CollectionList";
import { CollectionDetailsVariables } from "../../queries/gqlTypes/CollectionDetails";
import { CollectionDetails } from "./CollectionDetails";

export class CollectionsAPI
  implements
    WithList<CollectionListQuery, BaseCollection, CollectionListVariables> {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  /**
   * Method returning collection details
   * @param variables Details parameters
   */
  getDetails = (variables: CollectionDetailsVariables) => {
    const details = new CollectionDetails(this.client);

    details.init(variables);

    return details;
  };

  /**
   * Method returning list of collections with ability to request next page
   * @param params List parameters
   */
  getList = (variables: CollectionListVariables): CollectionList => {
    const list = new CollectionList(this.client);

    list.init(variables);

    return list;
  };
}
