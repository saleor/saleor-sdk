import ApolloClient from "apollo-client";
import {
  CollectionDetails as CollectionDetailsQuery,
  CollectionDetailsVariables,
} from "../../queries/gqlTypes/CollectionDetails";
import { CollectionDetails as CollectionDetailsFragment } from "../../fragments/gqlTypes/CollectionDetails";
import {
  CollectionList as CollectionListQuery,
  CollectionListVariables,
} from "../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../fragments/gqlTypes/BaseCollection";
import { WithDetails, WithList } from "../types";
import { ConfigInput } from "../../types";
import { CollectionList } from "./CollectionList";
import { CollectionDetails } from "./CollectionDetails";

export class CollectionsAPI
  implements
    WithDetails<
      CollectionDetailsQuery,
      CollectionDetailsFragment,
      CollectionDetailsVariables
    >,
    WithList<CollectionListQuery, BaseCollection, CollectionListVariables> {
  private client: ApolloClient<any>;

  // temporary solution, might change in future
  private config: ConfigInput;

  constructor(client: ApolloClient<any>, config: ConfigInput) {
    this.client = client;
    this.config = config;
  }

  /**
   * Method returning collection details
   * @param variables Details parameters
   */
  getDetails = async (variables: CollectionDetailsVariables) => {
    const details = new CollectionDetails(this.client);

    await details.init({ channel: this.config.channel, ...variables });

    return details;
  };

  /**
   * Method returning list of collections with ability to request next page
   * @param params List parameters
   */
  getList = async (variables: CollectionListVariables) => {
    const list = new CollectionList(this.client);

    await list.init({ channel: this.config.channel, ...variables });

    return list;
  };
}
