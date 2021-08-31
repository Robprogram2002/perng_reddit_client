/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendEmailInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: ressetPasswordEmail
// ====================================================

export interface ressetPasswordEmail_sendEmail {
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

export interface ressetPasswordEmail {
  sendEmail: ressetPasswordEmail_sendEmail;
}

export interface ressetPasswordEmailVariables {
  sendEmailInput: SendEmailInput;
}
