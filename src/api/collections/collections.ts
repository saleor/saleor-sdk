import ApolloClient from "apollo-client";
import {
  CollectionList as CollectionListQuery,
  CollectionListVariables,
} from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
import { collections } from "../../queries/collections";
import { WithList, ListParameters } from "../types";
import { CollectionList } from "./CollectionList";

export class CollectionsAPI
  implements WithList<CollectionListQuery, BaseCollection> {
  client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  getList = (params: ListParameters): CollectionList => {
    const getPerCall = params.count;

    const query = (variables: CollectionListVariables) =>
      this.client.query<CollectionListQuery, CollectionListVariables>({
        query: collections,
        variables,
      });

    const list = new CollectionList(query, getPerCall);

    list.init({
      after: params.endCursor,
      first: getPerCall,
    });

    return list;
  };
}
