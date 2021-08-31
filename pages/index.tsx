import { authContext } from '@context/AuthContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

const Home: NextPage = () => {
  const userData = useContext(authContext);
  console.log(userData);
  return (
    <div>
      <Head>
        <title>Reddit Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello world!!</h1>
        {userData.authenticated && <pre>{JSON.stringify(userData)}</pre>}
      </main>
    </div>
  );
};

export default Home;
