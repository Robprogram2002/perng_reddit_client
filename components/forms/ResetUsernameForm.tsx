import BackButton from '@components/UI/Buttons/BackButton';
import SubmitButton from '@components/UI/Buttons/SubmitButton';
import TextLink from '@components/UI/Links/TextLink';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthInput from './fields/AuthInput';

const schema = new Yup.ObjectSchema({
  email: Yup.string().required().email('field must be a valid email address'),
});

const ResetUsernameForm = ({
  setPage,
}: {
  // eslint-disable-next-line no-unused-vars
  setPage: (prop: string) => void;
}) => (
  <div className="py-6 px-8 w-96 relative flex flex-col justify-center">
    <h2 className="text-lg font-medium"> Retrieve your username </h2>
    <p className="text-sm mt-2 mb-4">
      Tell us the email address associated with your Reddit account and
      we&apos;ll send you an email with your username.
    </p>

    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={schema}
      validateOnBlur
      onSubmit={(values, actions) => {
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
                type="email"
                name="email"
                error={error2}
                label="E-mail address"
                value={values.email}
              />
            </div>
            <SubmitButton disabled={error1 || error2 || isSubmitting}>
              {/* {loading ? 'Loading ...' : 'Login'} */}
              Send me an email
            </SubmitButton>
          </Form>
        );
      }}
    </Formik>
    <small>Don&apos;t have an email or need help signing in ?</small>
    <TextLink href="/"> Get Help </TextLink>

    <BackButton clickHandler={() => setPage('login')} />
  </div>
);

export default ResetUsernameForm;
