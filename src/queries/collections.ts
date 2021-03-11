import gql from "graphql-tag";
import {
  baseCollectionFragment,
  collectionFragment,
} from "../fragments/collections";
import { pageInfo } from "../fragments/pageInfo";

export const collections = gql`
  ${baseCollectionFragment}
  ${pageInfo}
  query CollectionList(
    $first: Int!
    $after: String
    $sortBy: CollectionSortingInput
    $filter: CollectionFilterInput
    $channel: String
  ) {
    collections(
      first: $first
      after: $after
      sortBy: $sortBy
      filter: $filter
      channel: $channel
    ) {
      edges {
        node {
          ...BaseCollection
        }
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
`;

export const collectionDetails = gql`
  ${collectionFragment}
  query CollectionDetails($id: ID, $slug: String, $channel: String) {
    collection(id: $id, slug: $slug, channel: $channel) {
      ...CollectionDetails
    }
  }
`;
