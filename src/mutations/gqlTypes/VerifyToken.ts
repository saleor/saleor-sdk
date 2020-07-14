/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyToken
// ====================================================

export interface VerifyToken_tokenVerify_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface VerifyToken_tokenVerify {
  __typename: "VerifyToken";
  /**
   * JWT payload.
   */
  payload: any | null;
  /**
   * User assigned to token.
   */
  user: VerifyToken_tokenVerify_user | null;
}

export interface VerifyToken {
  /**
   * Verify JWT token.
   */
  tokenVerify: VerifyToken_tokenVerify | null;
}

export interface VerifyTokenVariables {
  token: string;
}
