/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface LocalSignInInput {
  password: string;
  username: string;
}

export interface RegisterInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordInput {
  password: string;
  token: string;
  confirmPassword: string;
}

export interface SendEmailInput {
  username: string;
  email: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
