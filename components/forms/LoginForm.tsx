import SubmitButton from '@components/UI/Buttons/SubmitButton';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthInput from './fields/AuthInput';

export const loginSchema = Yup.object({
  username: Yup.string()
    .required('username is a required field')
    .min(6, 'username must be at least 6 characters'),
  password: Yup.string()
    .required()
    .min(8, 'password must be at least 8 characters long'),
});

const LoginForm = () => (
  <div>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
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
              Login
            </SubmitButton>
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default LoginForm;
