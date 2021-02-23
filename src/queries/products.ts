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
    $channel: String
  ) {
    products(
      after: $after
      first: $first
      sortBy: $sortBy
      filter: $filter
      channel: $channel
    ) {
      edges {
        node {
          ...BaseProduct
          ...ProductPricingField
        }
      }
      totalCount
      pageInfo {
        ...PageInfo
      }
    }
  }
`;

export const productDetails = gql`
  ${productFragment}
  query ProductDetails(
    $id: ID
    $slug: String
    $countryCode: CountryCode
    $channel: String
    $variantSelection: VariantAttributeScope = ALL
  ) {
    product(id: $id, slug: $slug, channel: $channel) {
      ...ProductDetails
    }
  }
`;

export const variantsProducts = gql`
  query VariantsProducts($ids: [ID], $channel: String) {
    productVariants(ids: $ids, first: 100, channel: $channel) {
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
