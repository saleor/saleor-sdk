import gql from "graphql-tag";

export const checkoutErrorFragment = gql`
  fragment CheckoutError on CheckoutError {
    code
    field
    message
  }
`;

export const paymentErrorFragment = gql`
  fragment PaymentError on PaymentError {
    code
    field
    message
  }
`;

export const accountErrorFragment = gql`
  fragment AccountError on AccountError {
    code
    field
    message
  }
`;
