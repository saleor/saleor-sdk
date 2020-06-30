import gql from "graphql-tag";

export const fragmentInvoice = gql`
  fragment InvoiceFragment on Invoice {
    id
    number
    createdAt
    url
    status
  }
`;
