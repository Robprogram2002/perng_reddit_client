/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ResetPasswordInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: ressetPassword
// ====================================================

export interface ressetPassword_resetPassword {
  __typename: 'BaseResponse';
  /**
   * Similar to HTTP status code, represents the status of the mutation
   */
  code: number;
  /**
   * Human-readable message for the UI
   */
  message: string;
  /**
   * Indicates whether the mutation was successful
   */
  success: boolean;
}

export interface ressetPassword {
  resetPassword: ressetPassword_resetPassword;
}

export interface ressetPasswordVariables {
  resetPasswordInput: ResetPasswordInput;
}
