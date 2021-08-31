import { gql, useMutation } from '@apollo/client';
import SubmitButton from '@components/UI/Buttons/SubmitButton';
import { authContext, authFunctContext } from '@context/AuthContext';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import * as Yup from 'yup';
import AuthInput from './fields/AuthInput';
import { LoginUser, LoginUserVariables } from './graphql-types/LoginUser';

export const loginSchema = Yup.object({
  username: Yup.string()
    .required('username is a required field')
    .min(6, 'username must be at least 6 characters'),
  password: Yup.string()
    .required()
    .min(8, 'password must be at least 8 characters long'),
});

const LOGIN_MUTATION = gql`
  mutation LoginUser($signInInput: LocalSignInInput!) {
    signIn(input: $signInInput) {
      code
      message
      success
      user {
        email
        username
        avatarUrl
        bannerUrl
      }
    }
  }
`;

const LoginForm = () => {
  const { login } = useContext(authFunctContext);
  const { authenticated } = useContext(authContext);
  const router = useRouter();

  if (authenticated) router.push('/');

  const [mutate, { loading }] = useMutation<LoginUser, LoginUserVariables>(
    LOGIN_MUTATION,
    {
      onCompleted: ({ signIn }) => {
        if (signIn.success === true) {
          login(signIn.user!);
          router.push('/');
        }
      },
    }
  );

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginSchema}
        validateOnBlur
        onSubmit={(values, actions) => {
          mutate({
            variables: {
              signInInput: {
                ...values,
              },
            },
            onError: () => {
              actions.resetForm({ values });
              actions.setSubmitting(false);
            },
          });
        }}
      >
        {({ handleSubmit, errors, touched, values, isSubmitting }) => {
          const error1 = !!(errors.username && touched.username);
          const error2 = !!(errors.password && touched.password);

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
                  type="password"
                  name="password"
                  error={error2}
                  label="password"
                  value={values.password}
                />
              </div>
              <SubmitButton disabled={error1 || error2 || isSubmitting}>
                {loading ? 'Loading ...' : 'Login'}
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default LoginForm;
