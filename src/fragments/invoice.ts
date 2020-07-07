import gql from "graphql-tag";

export const invoiceFragment = gql`
  fragment InvoiceFragment on Invoice {
    id
    number
    createdAt
    url
    status
  }
`;
