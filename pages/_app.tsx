/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import AuthProvider from '@context/AuthContext';
import HeadMenu from '@components/layout/navigation/HeadMenu';
import AppContextProvider from '@context/AppContext';
import SideBarMenu from '@components/layout/navigation/SideBarMenu';
import CreateCommunityForm from '@components/forms/CreateCommunityForm';
import client from '../utils/apollo_client';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ['/login', '/register'];
  const isAuthRoute = authRoutes.includes(pathname);

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppContextProvider>
          {!isAuthRoute && <HeadMenu />}
          <SideBarMenu />
          <CreateCommunityForm />
          <Component {...pageProps} />
        </AppContextProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
export default MyApp;
