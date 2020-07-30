import gql from "graphql-tag";
import { baseCollectionFragment } from "../fragments/collections";
import { pageInfo } from "../fragments/pageInfo";

export const collections = gql`
  ${baseCollectionFragment}
  ${pageInfo}
  query CollectionList(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    collections(first: $first, last: $last, after: $after, before: $before) {
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
