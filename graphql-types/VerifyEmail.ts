/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyEmail
// ====================================================

export interface VerifyEmail_verifyEmail {
  __typename: 'BaseResponse';
  /**
   * Similar to HTTP status code, represents the status of the mutation
   */
  code: number;
  /**
   * Indicates whether the mutation was successful
   */
  success: boolean;
  /**
   * Human-readable message for the UI
   */
  message: string;
}

export interface VerifyEmail {
  verifyEmail: VerifyEmail_verifyEmail;
}

export interface VerifyEmailVariables {
  token: string;
}
