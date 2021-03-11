import gql from "graphql-tag";
import { pageInfo } from "../fragments/pageInfo";
import {
  baseCategoryFragment,
  categoryFragment,
} from "../fragments/categories";

export const categoryList = gql`
  ${baseCategoryFragment}
  ${pageInfo}
  query CategoryList($first: Int!, $after: String) {
    categories(first: $first, after: $after) {
      edges {
        node {
          ...BaseCategory
        }
      }
      totalCount
      pageInfo {
        ...PageInfo
      }
    }
  }
`;

export const categoryChildrenList = gql`
  ${baseCategoryFragment}
  ${pageInfo}
  query CategoryChildrenList($id: ID!, $first: Int!, $after: String) {
    category(id: $id) {
      id
      children(first: $first, after: $after) {
        edges {
          node {
            ...BaseCategory
          }
        }
        totalCount
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;

export const categoryAncestorsList = gql`
  ${baseCategoryFragment}
  ${pageInfo}
  query CategoryAncestorsList($id: ID!, $first: Int!, $after: String) {
    category(id: $id) {
      id
      ancestors(first: $first, after: $after) {
        edges {
          node {
            ...BaseCategory
          }
        }
        totalCount
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;

export const categoryDetails = gql`
  ${categoryFragment}
  query CategoryDetails($id: ID, $slug: String) {
    category(id: $id, slug: $slug) {
      ...CategoryDetails
    }
  }
`;
