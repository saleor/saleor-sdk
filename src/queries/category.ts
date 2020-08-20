import gql from "graphql-tag";
import { pageInfo } from "../fragments/pageInfo";
import { baseCategoryFragment } from "../fragments/categories";

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
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;

export const categoryQuery = gql`
  query CategoryDetails($id: ID!) {
    category(id: $id) {
      seoDescription
      seoTitle
      id
      name
      backgroundImage {
        url
      }
      ancestors(last: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;
