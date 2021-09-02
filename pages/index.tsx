import { authContext } from '@context/AuthContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

const Home: NextPage = () => {
  const userData = useContext(authContext);

  return (
    <div>
      <Head>
        <title>Reddit Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {userData.authenticated && (
          <pre>{JSON.stringify(userData, undefined, 3)}</pre>
        )}
      </main>
    </div>
  );
};

export default Home;
