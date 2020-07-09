import gql from "graphql-tag";

export const tokenAuthMutation = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      errors: accountErrors {
        code
        field
        message
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
