import gql from "graphql-tag";

import { orderDetailFragment, orderPriceFragment } from "../fragments/order";
import { invoiceFragment } from "../fragments/invoice";

export const ordersByUser = gql`
  ${orderPriceFragment}
  query OrdersByUser($perPage: Int!, $after: String) {
    me {
      id
      orders(first: $perPage, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            token
            number
            statusDisplay
            created
            total {
              ...OrderPrice
            }
            lines {
              id
              variant {
                id
                product {
                  name
                  id
                }
                quantityOrdered
                pricing {
                  discount {
                    ...OrderPrice
                  }
                  price {
                    ...OrderPrice
                  }
                  priceUndiscounted {
                    ...OrderPrice
                  }
                }
              }
              thumbnail {
                alt
                url
              }
              thumbnail2x: thumbnail(size: 510) {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const orderDetailsByTokenQuery = gql`
  ${orderDetailFragment}
  query OrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
    }
  }
`;

export const userOrderDetailsByTokenQuery = gql`
  ${orderDetailFragment}
  ${invoiceFragment}
  query UserOrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
      invoices {
        ...InvoiceFragment
      }
    }
  }
`;
