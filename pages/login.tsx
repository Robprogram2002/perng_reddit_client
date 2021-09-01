import { useContext, useState } from 'react';
import LoginForm from '@components/forms/LoginForm';
import ButtonIcon from '@components/UI/Buttons/ButtonIcon';
import TextLink from '@components/UI/Links/TextLink';
import AuhtFormHead from '@components/UI/Other/AuhtFormHead';
import FormDivider from '@components/UI/Other/FormDivider';
import Head from 'next/head';
import { BiAccessibility } from 'react-icons/bi';
import ResetUsernameForm from '@components/forms/ResetUsernameForm';
import ResetPasswordForm from '@components/forms/ResetPasswordForm';
import { auth, githubProvider, googleProvider } from 'utils/firebase';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { authFunctContext } from '@context/AuthContext';

const AUTH0_LOGIN = gql`
  mutation FirebaseLogin($firebaseLoginToken: String!) {
    firebaseLogin(token: $firebaseLoginToken) {
      code
      message
      success
      user {
        avatarUrl
        bannerUrl
        email
        username
      }
    }
  }
`;

export const FirebaseAuth = () => {
  const router = useRouter();
  const { login } = useContext(authFunctContext);

  const [mutate, { loading }] = useMutation(AUTH0_LOGIN, {
    onCompleted: ({ firebaseLogin }) => {
      if (firebaseLogin.success) {
        login(firebaseLogin.user!);
        router.push('/');
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        const { user } = result;
        if (!user) {
          throw new Error('something went wrong with firebase');
        }
        const authResult = await user.getIdTokenResult();
        const { token } = authResult;
        mutate({ variables: { firebaseLoginToken: token } });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };

  const githubLogin = async () => {
    auth
      .signInWithPopup(githubProvider)
      .then(async (result) => {
        const { user } = result;
        // console.log(user);

        if (!user) {
          throw new Error('something went wrong with firebase');
        }
        const authResult = await user.getIdTokenResult();
        const { token } = authResult;
        mutate({ variables: { firebaseLoginToken: token } });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <>
      <ButtonIcon
        component={<BiAccessibility size={30} />}
        clickHandler={googleLogin}
      >
        {loading ? 'Loading...' : 'Login With Google'}
      </ButtonIcon>
      <ButtonIcon
        component={<BiAccessibility size={30} />}
        clickHandler={githubLogin}
      >
        Login With github
      </ButtonIcon>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
const Login = ({ setPage }: { setPage: (prop: string) => void }) => {
  const redirect = (page: string) => {
    setPage(page);
  };

  return (
    <div className="py-6 px-8">
      <AuhtFormHead />

      <div className="w-70">
        <FirebaseAuth />
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
