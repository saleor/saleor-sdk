import gql from "graphql-tag";

import { userFragment } from "../fragments/auth";
import { accountErrorFragment } from "../fragments/errors";

export const changeUserPassword = gql`
  ${accountErrorFragment}
  mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`;

export const registerAccount = gql`
  mutation RegisterAccount(
    $email: String!
    $password: String!
    $redirectUrl: String!
  ) {
    accountRegister(
      input: { email: $email, password: $password, redirectUrl: $redirectUrl }
    ) {
      accountErrors {
        field
        message
        code
      }
      requiresConfirmation
    }
  }
`;

export const resetPasswordRequest = gql`
  mutation ResetPasswordRequest($email: String!, $redirectUrl: String!) {
    requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
      accountErrors {
        field
        message
        code
      }
    }
  }
`;

export const accountUpdate = gql`
  ${userFragment}
  ${accountErrorFragment}
  mutation AccountUpdate($input: AccountInput!) {
    accountUpdate(input: $input) {
      errors: accountErrors {
        ...AccountError
      }
      user {
        ...User
      }
    }
  }
`;

export const setPassword = gql`
  ${userFragment}
  ${accountErrorFragment}
  mutation SetPassword($token: String!, $email: String!, $password: String!) {
    setPassword(token: $token, email: $email, password: $password) {
      errors: accountErrors {
        ...AccountError
      }
      token
      user {
        ...User
      }
      accountErrors {
        field
        message
        code
      }
    }
  }
`;
