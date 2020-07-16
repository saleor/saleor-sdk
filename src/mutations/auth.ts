import gql from "graphql-tag";

import { accountErrorFragment } from "../fragments/errors";

export const tokenAuthMutation = gql`
  ${accountErrorFragment}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      errors: accountErrors {
        ...AccountError
      }
      user {
        id
      }
    }
  }
`;

export const tokenVeryficationMutation = gql`
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      payload
      user {
        id
      }
    }
  }
`;
