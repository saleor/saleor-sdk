import ApolloClient from "apollo-client";
import {
  CollectionList as CollectionListQuery,
  CollectionListVariables,
} from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
import { WithList } from "../types";
import { CollectionList } from "./CollectionList";

export class CollectionsAPI
  implements
    WithList<CollectionListQuery, BaseCollection, CollectionListVariables> {
  client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

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
