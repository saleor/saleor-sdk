import gql from "graphql-tag";
import { baseCollectionFragment } from "../fragments/collections";
import { pageInfo } from "../fragments/pageInfo";

export const collections = gql`
  ${baseCollectionFragment}
  ${pageInfo}
  query CollectionList($first: Int, $after: String) {
    collections(first: $first, after: $after) {
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
