import { gql } from "@apollo/client";

import {
  accountErrorFragment,
  // checkoutErrorFragment,
  // paymentErrorFragment,
  // checkoutFragment,
  // orderDetailFragment,
  // paymentFragment,
  userFragment,
} from "./fragments";

export const LOGIN = gql`
  ${accountErrorFragment}
  ${userFragment}
  mutation login($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      csrfToken
      refreshToken
      token
      errors {
        ...AccountErrorFragment
      }
      user {
        ...UserFragment
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
      errors {
        field
        message
        code
      }
      requiresConfirmation
    }
  }
`;

export const REFRESH_TOKEN = gql`
  ${accountErrorFragment}
  mutation RefreshToken($csrfToken: String, $refreshToken: String) {
    tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
      token
      user {
        id
      }
      errors {
        ...AccountErrorFragment
      }
    }
  }
`;
