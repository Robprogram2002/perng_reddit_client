/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocalSignInInput } from './../../../graphql-types/globalTypes';

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_signIn_user {
  __typename: 'User';
  /**
   * user email
   */
  email: string;
  /**
   * name of the user instance
   */
  username: string;
  /**
   * url of the user avatar image
   */
  avatarUrl: string;

  bannerUrl: string;
}

export interface LoginUser_signIn {
  __typename: 'RegisterResponse';
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
  /**
   * new user instance after success register or in other case null
   */
  user: LoginUser_signIn_user | null;
}

export interface LoginUser {
  signIn: LoginUser_signIn;
}

export interface LoginUserVariables {
  signInInput: LocalSignInInput;
}
