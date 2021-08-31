import { useState } from 'react';
import LoginForm from '@components/forms/LoginForm';
import ButtonIcon from '@components/UI/Buttons/ButtonIcon';
import TextLink from '@components/UI/Links/TextLink';
import AuhtFormHead from '@components/UI/Other/AuhtFormHead';
import FormDivider from '@components/UI/Other/FormDivider';
import Head from 'next/head';
import { BiAccessibility } from 'react-icons/bi';
import ResetUsernameForm from '@components/forms/ResetUsernameForm';
import ResetPasswordForm from '@components/forms/ResetPasswordForm';

// eslint-disable-next-line no-unused-vars
const Login = ({ setPage }: { setPage: (prop: string) => void }) => {
  const redirect = (page: string) => {
    setPage(page);
  };

  return (
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
          Do you not remember your{' '}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={() => redirect('username')}
            onKeyDown={() => redirect('username')}
            role="link"
            tabIndex={0}
          >
            username
          </span>{' '}
          or{' '}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={() => redirect('password')}
            onKeyDown={() => redirect('password')}
            role="link"
            tabIndex={0}
          >
            password
          </span>
        </p>
        <small>New to Readit?</small>
        <TextLink href="/register"> Register </TextLink>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [page, setPage] = useState('login');

  const redirect = (prop: string) => {
    setPage(prop);
  };

  let content;
  if (page === 'login') {
    content = <Login setPage={redirect} />;
  }

  if (page === 'username') {
    content = <ResetUsernameForm setPage={redirect} />;
  }

  if (page === 'password') {
    content = <ResetPasswordForm setPage={redirect} />;
  }

  return (
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

        {content}
      </div>
    </>
  );
};

export default LoginPage;
