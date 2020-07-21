import gql from "graphql-tag";

export const paymentFragment = gql`
  fragment Payment on Payment {
    id
    gateway
    token
    creditCard {
      brand
      firstDigits
      lastDigits
      expMonth
      expYear
    }
  }
`;

export const paymentGatewayFragment = gql`
  fragment PaymentGateway on PaymentGateway {
    id
    name
    config {
      field
      value
    }
    currencies
  }
`;
