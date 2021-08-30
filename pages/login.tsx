import LoginForm from '@components/forms/LoginForm';
import ButtonIcon from '@components/UI/Buttons/ButtonIcon';
import TextLink from '@components/UI/Links/TextLink';
import AuhtFormHead from '@components/UI/Other/AuhtFormHead';
import FormDivider from '@components/UI/Other/FormDivider';
import Head from 'next/head';
import { BiAccessibility } from 'react-icons/bi';

const LoginPage = () => (
  <>
    <Head>
      <title>Login</title>
    </Head>
    <div className="bg-white flex">
      <div
        className="h-screen bg-center bg-cover w-52"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/images/bricks.jpg')`,
        }}
      />
      <div className="py-6 px-8">
        <AuhtFormHead />

        <div className="w-70">
          <ButtonIcon component={<BiAccessibility size={30} />}>
            Login With Google
          </ButtonIcon>
          <ButtonIcon component={<BiAccessibility size={30} />}>
            Login With github
          </ButtonIcon>

          <FormDivider />
          <LoginForm />

          <p className="text-sm mb-4">
            Do you not remember your username or password?
            <TextLink href="/" className="underline">
              {' '}
              click here{' '}
            </TextLink>
          </p>
          <small>New to Readit?</small>
          <TextLink href="/register"> Register </TextLink>
        </div>
      </div>
    </div>
  </>
);

export default LoginPage;
