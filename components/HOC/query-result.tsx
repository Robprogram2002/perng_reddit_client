import { FC } from 'react';

/**
 * Query Results conditionnally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult: FC<{ loading: boolean; data: any; error: any }> = ({
  loading,
  error,
  data,
  children,
}) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <h1>Loading </h1>
      </div>
    );
  }

  if (data) {
    return <div>{children}</div>;
  }

  return <p>Nothing to show...</p>;
};

export default QueryResult;
