import gql from "graphql-tag";

import { pageInfo } from "../fragments/pageInfo";
import {
  baseProductFragment,
  productFragment,
  productPricingFragment,
} from "../fragments/products";

export const productList = gql`
  ${baseProductFragment}
  ${productPricingFragment}
  ${pageInfo}
  query ProductList(
    $after: String
    $first: Int!
    $sortBy: ProductOrder
    $filter: ProductFilterInput
  ) {
    products(after: $after, first: $first, sortBy: $sortBy, filter: $filter) {
      edges {
        node {
          ...BaseProduct
          ...ProductPricingField
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
`;

export const productDetails = gql`
  ${productFragment}
  query ProductDetails($id: ID, $slug: String, $countryCode: CountryCode) {
    product(id: $id, slug: $slug) {
      ...ProductDetails
    }
  }
`;

export const variantsProducts = gql`
  query VariantsProducts($ids: [ID]) {
    productVariants(ids: $ids, first: 100) {
      edges {
        node {
          id
          product {
            id
            productType {
              isShippingRequired
            }
          }
        }
      }
    }
  }
`;
