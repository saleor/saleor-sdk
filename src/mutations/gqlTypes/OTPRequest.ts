/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OTPErrorCodeEnum } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: OTPRequest
// ====================================================

export interface OTPRequest_RequestOTP_otpErrors {
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

export interface OTPRequest_RequestOTP {
  __typename: "RequestOTP";
  /**
   * Success messsage signifying an OTP has been sent to user's phone.
   */
  message: string | null;
  otpErrors: OTPRequest_RequestOTP_otpErrors[];
}

export interface OTPRequest {
  /**
   * Requests for OTP for registered user.
   */
  RequestOTP: OTPRequest_RequestOTP | null;
}

export interface OTPRequestVariables {
  phone: string;
}
