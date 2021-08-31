import { gql, useMutation } from '@apollo/client';
import AuthInput from '@components/forms/fields/AuthInput';
import SubmitButton from '@components/UI/Buttons/SubmitButton';
import TextLink from '@components/UI/Links/TextLink';
import { Form, Formik } from 'formik';
import Head from 'next/head';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  ressetPassword,
  ressetPasswordVariables,
} from 'graphql-types/ressetPassword';

const schema = new Yup.ObjectSchema({
  password: Yup.string()
    .required()
    .min(8, 'password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .required()
    .min(8, 'password must be at least 8 characters long'),
});

const RESET_PASSWORD_MUTATION = gql`
  mutation ressetPassword($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(input: $resetPasswordInput) {
      code
      message
      success
    }
  }
`;

const ResetPasswordPage = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const token = router.query.token as string | undefined;

  const [mutate, { loading }] = useMutation<
    ressetPassword,
    ressetPasswordVariables
  >(RESET_PASSWORD_MUTATION, {
    onCompleted: ({ resetPassword }) => {
      if (resetPassword.success) {
        setSuccess(true);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className="bg-white flex">
        <div
          className="h-screen bg-center bg-cover w-52"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/images/bricks.jpg')`,
          }}
        />
        <div className="py-6 px-8 w-96 flex flex-col justify-center">
          <h2 className="text-lg font-medium"> Reset your password </h2>
          <p className="text-sm mt-2 mb-4">
            Tell us the username and email address associated with your Reddit
            account, and we&apos;ll send you an email with a link to reset your
            password.
          </p>

          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={schema}
            validateOnBlur
            onSubmit={(values, actions) => {
              mutate({
                variables: {
                  resetPasswordInput: {
                    ...values,
                    token: token!,
                  },
                },
              });
              actions.resetForm({ values });
            }}
          >
            {({ handleSubmit, errors, touched, values, isSubmitting }) => {
              const error1 = !!(errors.password && touched.password);
              const error2 = !!(
                errors.confirmPassword && touched.confirmPassword
              );

              return (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <AuthInput
                      type="password"
                      error={error1}
                      name="password"
                      label="New password"
                      value={values.password}
                    />
                    <AuthInput
                      type="password"
                      name="confirmPassword"
                      error={error2}
                      label="Password Confirmation"
                      value={values.confirmPassword}
                    />
                  </div>
                  <SubmitButton disabled={error1 || error2 || isSubmitting}>
                    {loading ? 'Loading ...' : 'Reset Password'}
                  </SubmitButton>

                  {success && (
                    <>
                      <span className="text-sm text-blue-400 mb-3 block">
                        Great !. Your password has been updated successfully.
                        Now you can loggin with your new password
                      </span>
                      <TextLink href="/login" className="text-sm px-1 ">
                        Go to Login
                      </TextLink>
                    </>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
