import gql from "graphql-tag";
import { baseCollectionFragment } from "../fragments/collections";
import { pageInfo } from "../fragments/pageInfo";

export const collections = gql`
  ${baseCollectionFragment}
  ${pageInfo}
  query CollectionList(
    $first: Int!
    $after: String
    $sortBy: CollectionSortingInput
    $filter: CollectionFilterInput
  ) {
    collections(
      first: $first
      after: $after
      sortBy: $sortBy
      filter: $filter
    ) {
      edges {
        node {
          ...BaseCollection
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
`;
