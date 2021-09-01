/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import AuthProvider from '@context/AuthContext';
import HeadMenu from '@components/layout/navigation/HeadMenu';
import client from '../utils/apollo_client';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ['/login', '/register'];
  const isAuthRoute = authRoutes.includes(pathname);

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        {!isAuthRoute && <HeadMenu />}
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}
export default MyApp;
