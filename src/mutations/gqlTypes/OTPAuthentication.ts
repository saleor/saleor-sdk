/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OTPErrorCodeEnum } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: OTPAuthentication
// ====================================================

export interface OTPAuthentication_CreateTokenOTP_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface OTPAuthentication_CreateTokenOTP_otpErrors {
  __typename: "OTPError";
  /**
   * The error code.
   */
  code: OTPErrorCodeEnum | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface OTPAuthentication_CreateTokenOTP {
  __typename: "CreateTokenOTP";
  /**
   * JWT token, required to authenticate.
   */
  token: string | null;
  /**
   * JWT refresh token, required to re-generate access token.
   */
  refreshToken: string | null;
  /**
   * CSRF token required to re-generate access token.
   */
  csrfToken: string | null;
  /**
   * A user instance.
   */
  user: OTPAuthentication_CreateTokenOTP_user | null;
  otpErrors: OTPAuthentication_CreateTokenOTP_otpErrors[];
}

export interface OTPAuthentication {
  /**
   * Create JWT token via OTP.
   */
  CreateTokenOTP: OTPAuthentication_CreateTokenOTP | null;
}

export interface OTPAuthenticationVariables {
  phone: string;
  otp: string;
}
