import { gql, useMutation } from '@apollo/client';
import BackButton from '@components/UI/Buttons/BackButton';
import SubmitButton from '@components/UI/Buttons/SubmitButton';
import TextLink from '@components/UI/Links/TextLink';
import { Form, Formik } from 'formik';
import {
  ressetPasswordEmail,
  ressetPasswordEmailVariables,
} from 'graphql-types/ressetPasswordEmail';
import { useState } from 'react';
import * as Yup from 'yup';
import AuthInput from './fields/AuthInput';

const schema = new Yup.ObjectSchema({
  email: Yup.string().required().email('field must be a valid email address'),
  username: Yup.string()
    .required('username is a required field')
    .min(6, 'The username must be between 3 and 20 characters long')
    .max(20, 'The username must be between 3 and 20 characters long'),
});

const SENDEMAIL_MUTATION = gql`
  mutation ressetPasswordEmail($sendEmailInput: SendEmailInput!) {
    sendEmail(input: $sendEmailInput) {
      code
      message
      success
    }
  }
`;

const ResetPasswordForm = ({
  setPage,
}: {
  // eslint-disable-next-line no-unused-vars
  setPage: (prop: string) => void;
}) => {
  const [success, setSuccess] = useState(false);
  const [mutate, { loading }] = useMutation<
    ressetPasswordEmail,
    ressetPasswordEmailVariables
  >(SENDEMAIL_MUTATION, {
    onCompleted: ({ sendEmail }) => {
      if (sendEmail.success) {
        setSuccess(true);
      }
    },
  });

  return (
    <div className="py-6 px-8 w-1/3 relative flex flex-col justify-center">
      <h2 className="text-lg font-medium"> Reset your password </h2>
      <p className="text-sm mt-2 mb-4">
        Tell us the username and email address associated with your Reddit
        account, and we&apos;ll send you an email with a link to reset your
        password.
      </p>

      <Formik
        initialValues={{
          username: '',
          email: '',
        }}
        validationSchema={schema}
        validateOnBlur
        onSubmit={(values, actions) => {
          mutate({
            variables: {
              sendEmailInput: {
                ...values,
              },
            },
          });
          actions.resetForm({ values });
        }}
      >
        {({ handleSubmit, errors, touched, values, isSubmitting }) => {
          const error1 = !!(errors.username && touched.username);
          const error2 = !!(errors.email && touched.email);

          return (
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <AuthInput
                  type="text"
                  error={error1}
                  name="username"
                  label="username"
                  value={values.username}
                />
                <AuthInput
                  type="email"
                  name="email"
                  error={error2}
                  label="E-mail address"
                  value={values.email}
                />
              </div>
              <SubmitButton disabled={error1 || error2 || isSubmitting}>
                {loading ? 'Loading ...' : 'Send Email'}
              </SubmitButton>

              {success && (
                <span className="text-sm text-blue-400 mb-3 block">
                  Thank you! If your Reddit username and email address match,
                  you&apos;ll receive an email with a link to reset your
                  password shortly.
                </span>
              )}
            </Form>
          );
        }}
      </Formik>

      <small>
        Don&apos;t have an email or need help signing in ?{' '}
        <TextLink href="/" className="text-sm px-1 ">
          Get Help
        </TextLink>{' '}
      </small>

      <span
        className="text-blue-500 underline cursor-pointer my-4"
        onClick={() => setPage('username')}
        onKeyDown={() => setPage('username')}
        role="link"
        tabIndex={0}
      >
        FORGOT YOUR USERNAME?
      </span>

      <BackButton clickHandler={() => setPage('login')} />
    </div>
  );
};

export default ResetPasswordForm;
