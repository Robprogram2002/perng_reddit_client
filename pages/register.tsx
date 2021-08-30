import { useState } from 'react';
import RegisterForm from '@components/forms/RegisterForm';
import ButtonIcon from '@components/UI/Buttons/ButtonIcon';
import TextLink from '@components/UI/Links/TextLink';
import AuhtFormHead from '@components/UI/Other/AuhtFormHead';
import FormDivider from '@components/UI/Other/FormDivider';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Head from 'next/head';
import { BiAccessibility } from 'react-icons/bi';

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
                <ButtonIcon component={<BiAccessibility size={30} />}>
                  Login With Google
                </ButtonIcon>
                <ButtonIcon component={<BiAccessibility size={30} />}>
                  Login With github
                </ButtonIcon>
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

          {phase === 2 && (
            <div className="absolute bottom-6 left-8 flex items-center cursor-pointer">
              <FiArrowLeftCircle size={30} onClick={() => setPhase(1)} />
              <span className="px-2"> Back </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
