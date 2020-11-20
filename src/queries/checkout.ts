import gql from "graphql-tag";

import {
  checkoutFragment,
  checkoutProductVariantFragment,
} from "../fragments/checkout";

export const checkoutDetails = gql`
  ${checkoutFragment}
  query CheckoutDetails($token: UUID!) {
    checkout(token: $token) {
      ...Checkout
    }
  }
`;

export const userCheckoutTokenList = gql`
  query UserCheckoutTokenList($channel: String) {
    me {
      id
      checkoutTokens(channel: $channel)
    }
  }
`;

export const checkoutProductVariants = gql`
  ${checkoutProductVariantFragment}
  query CheckoutProductVariants($ids: [ID], $channel: String) {
    productVariants(ids: $ids, first: 100, channel: $channel) {
      edges {
        node {
          ...ProductVariant
        }
      }
    }
  }
`;
