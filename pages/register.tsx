import { useState } from 'react';
import RegisterForm from '@components/forms/RegisterForm';
import TextLink from '@components/UI/Links/TextLink';
import AuhtFormHead from '@components/UI/Other/AuhtFormHead';
import FormDivider from '@components/UI/Other/FormDivider';
import Head from 'next/head';
import BackButton from '@components/UI/Buttons/BackButton';
import { FirebaseAuth } from './login';

const RegisterPage = () => {
  const [phase, setPhase] = useState(1);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="bg-white flex">
        <div
          className="h-screen bg-center bg-cover w-52"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/images/bricks.jpg')`,
          }}
        />
        <div className="py-6 px-8 relative">
          <AuhtFormHead login={false} />

          <div className="w-70">
            {phase === 1 ? (
              <>
                <FirebaseAuth />
                <FormDivider />
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold ">Choose your username</h2>
                <p className="text-sm mb-6">
                  Your username is as other community members will see you. This
                  name will be used to credit you for the things you share on
                  Reddit. What should we call you?
                </p>
              </>
            )}
            <RegisterForm changePhaseHandler={setPhase} phase={phase} />
            <small>Do you are a Reddit user already?</small>
            <TextLink href="/register" className="uppercase">
              Login
            </TextLink>
          </div>

          {phase === 2 && <BackButton clickHandler={() => setPhase(1)} />}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
