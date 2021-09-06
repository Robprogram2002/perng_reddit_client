// We want the Apollo client instance to be updated only when the cache value has changed,
// The useApollo function is defined which calls a useMemo hook which returns the memoized
// value of the Apollo client returned by the call to initializeApollo and it is recomputed
// only when the initialState value changes.

import { useMemo } from 'react';
import initializeApollo from './apollo_client';

const useApollo = (initialState: any) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

export default useApollo;
