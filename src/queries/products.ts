import gql from "graphql-tag";

import { checkoutPriceFragment } from "../fragments/checkout";
import { pageInfo } from "../fragments/pageInfo";
import {
  baseProduct,
  productVariantFragment,
  selectedAttributeFragment,
} from "../fragments/products";

export const productPricingFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;

export const productList = gql`
  ${baseProduct}
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
  ${baseProduct}
  ${selectedAttributeFragment}
  ${productVariantFragment}
  ${productPricingFragment}
  query ProductDetails($id: ID!, $countryCode: CountryCode) {
    product(id: $id) {
      ...BaseProduct
      ...ProductPricingField
      descriptionJson
      category {
        id
        name
        products(first: 3) {
          edges {
            node {
              ...BaseProduct
              ...ProductPricingField
              category {
                id
                name
              }
            }
          }
        }
      }
      images {
        id
        url
      }
      attributes {
        ...SelectedAttributeFields
      }
      variants {
        ...ProductVariantFields
      }
      seoDescription
      seoTitle
      isAvailable
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
