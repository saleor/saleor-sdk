import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import {
  CollectionDetails as CollectionDetailsQuery,
  CollectionDetailsVariables,
} from "../../queries/gqlTypes/CollectionDetails";
import { CollectionDetails as Collection } from "../../fragments/gqlTypes/CollectionDetails";
import { collectionDetails } from "../../queries/collections";

export class CollectionDetails extends BaseDetails<
  CollectionDetailsQuery,
  Collection,
  CollectionDetailsVariables
> {
  mapQueryData: MapQueryData<CollectionDetailsQuery, Collection> = data =>
    data.collection || undefined;

  query = (variables: CollectionDetailsVariables) =>
    this.client!.query<CollectionDetailsQuery, CollectionDetailsVariables>({
      query: collectionDetails,
      variables,
    });
}
