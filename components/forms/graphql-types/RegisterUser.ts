/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterInput } from './../../../graphql-types/globalTypes';

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_register {
  __typename: 'RegisterResponse';
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

export interface RegisterUser {
  register: RegisterUser_register;
}

export interface RegisterUserVariables {
  registerInput: RegisterInput;
}
