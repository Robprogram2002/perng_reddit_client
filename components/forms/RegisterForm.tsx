import SubmitButton from '@components/UI/Buttons/SubmitButton';
import { Form, Formik } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import * as Yup from 'yup';
import AuthInput from './fields/AuthInput';

export const registerSchema = Yup.object({
  email: Yup.string().required().email('field must be a valid email address'),
  username: Yup.string()
    .required('username is a required field')
    .min(6, 'The username must be between 3 and 20 characters long')
    .max(20, 'The username must be between 3 and 20 characters long'),
  password: Yup.string()
    .required()
    .min(8, 'password must be at least 8 characters long'),
});

const RegisterForm = ({
  changePhaseHandler,
  phase,
}: {
  changePhaseHandler: Dispatch<SetStateAction<number>>;
  phase: number;
}) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
      }}
      validationSchema={registerSchema}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, touched, values, isSubmitting }) => {
        const error1 = !!(errors.username && touched.username);
        const error2 = !!(errors.password && touched.password);
        const error3 = !!(errors.email && touched.email);

        return (
          <Form onSubmit={handleSubmit}>
            {phase === 1 ? (
              <>
                <div className="mb-4">
                  <AuthInput
                    type="email"
                    error={error3}
                    name="email"
                    label="Email"
                    value={values.email}
                  />
                </div>
                <SubmitButton
                  disabled={error3 || !touched.email}
                  type="button"
                  clickHandler={() => changePhaseHandler(2)}
                >
                  Continue
                </SubmitButton>
              </>
            ) : (
              <>
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
                  Register
                </SubmitButton>
              </>
            )}
            {}
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default RegisterForm;
