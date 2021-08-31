import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, gql } from '@apollo/client';
import TextLink from '@components/UI/Links/TextLink';
import { VerifyEmail, VerifyEmailVariables } from 'graphql-types/VerifyEmail';

const VERIFY_EMAIL_MUTATION = gql`
  mutation VerifyEmail($token: String!) {
    verifyEmail(token: $token) {
      code
      success
      message
    }
  }
`;

const VerifyEmailPage = () => {
  const [completed, setCompleted] = useState(false);
  const router = useRouter();
  const token = router.query.token as string | undefined;

  const [mutate, { loading, error }] = useMutation<
    VerifyEmail,
    VerifyEmailVariables
  >(VERIFY_EMAIL_MUTATION, {
    onCompleted: (data) => {
      if (data.verifyEmail.success) {
        setCompleted(true);
      }
    },
  });

  useEffect(() => {
    if (token) {
      mutate({
        variables: {
          token,
        },
      });
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full py-6 flex justify-center">
        {loading && <h1 className="text-2xl font-semibold">Loading ...</h1>}
        {error && (
          <h3 className="text-red-700 font-semibold text-base">
            {error.message}
          </h3>
        )}
        {completed && (
          <div className=" flex flex-col items-center justify-center p-3 border border-gray-500 rounded">
            <h4 className="font-bold text-lg">
              Your email account has been verify successfully
            </h4>
            <p>
              Now you can start to talk with thousands of persons around the
              workl
            </p>
            <div className="flex my-2">
              <TextLink href="/" className="underline uppercase">
                Go Home
              </TextLink>
              <TextLink href="/login" className="underline uppercase">
                Go To Login
              </TextLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
