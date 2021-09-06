import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

/* 
function that returns an Apollo client instance for the given config, we don’t want to create a new instance 
for the different pages, we just want to merge the Apollo cache with initial state
*/
const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_API,
    credentials: 'include',
    connectToDevTools: true,
  });

// create a new client if it doesn’t exist. If it does, then it merges the Apollo cache with the initialState
// (if not null) which is the Apollo cache value that is passed to initializeApollo

export default function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
