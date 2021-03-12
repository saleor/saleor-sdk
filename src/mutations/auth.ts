import gql from "graphql-tag";

import { accountErrorFragment } from "../fragments/errors";

export const tokenAuthMutation = gql`
  ${accountErrorFragment}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      csrfToken
      refreshToken
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
  ${accountErrorFragment}
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      isValid
      payload
      user {
        id
      }
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`;

export const tokenRefreshMutation = gql`
  ${accountErrorFragment}
  mutation RefreshToken($csrfToken: String, $refreshToken: String) {
    tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
      token
      user {
        id
      }
      errors: accountErrors {
        ...AccountError
      }
    }
  }
`;

export const requestOTPMutation = gql`
  mutation OTPRequest($phone: String!) {
    RequestOTP: requestOtp(phone: $phone) {
      message
      otpErrors {
        code
        field
        message
      }
    }
  }
`;

export const createOTPTokeMutation = gql`
  mutation OTPAuthentication($phone: String!, $otp: String!) {
    CreateTokenOTP: otpTokenCreate(otp: $otp, phone: $phone) {
      token
      refreshToken
      csrfToken
      user {
        id
        email
        firstName
        lastName
      }
      otpErrors {
        code
        field
        message
      }
    }
  }
`;
