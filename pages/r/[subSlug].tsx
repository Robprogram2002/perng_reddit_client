import Card from '@components/UI/Cards/Card';
import { gql, useQuery } from '@apollo/client';
import QueryResult from '@components/HOC/QueryResult';
// import client from 'utils/apollo_client';
import { GetServerSidePropsContext } from 'next';
import SubHeader from '@components/sections/SubHeader';
import FlatCreatePost from '@components/forms/FlatCreatePost';
import FeedMenu from '@components/sections/FeedMenu';
import SubActions from '@components/sections/SubActions';
import SubDescription from '@components/sections/SubDescription';
import SubCustomize from '@components/UI/Cards/SubCustomize';
import { useRouter } from 'next/router';
import StylesSideBar from '@components/layout/navigation/StylesSideBar';
import { useContext } from 'react';
import { authContext } from '@context/AuthContext';
import SubThemeProvider, { subThemeContext } from '@context/SubThemeContext';
import initializeApollo from 'utils/apollo_client';

const SUB_QUERY = gql`
  query fetchSub($subSubName: String!) {
    Sub(subName: $subSubName) {
      code
      message
      success
      sub {
        id
        description
        name
        username
        createdAt
        type
        settings {
          id
          bannerSize
          baseColor
          title
          banner {
            publicId
            url
          }
          profile {
            publicId
            url
          }
          bodyBackground {
            type
            value
          }
          highlightColor
          postTitleColor
          postBackground {
            type
            value
          }
        }
      }
    }
  }
`;

const Content = ({ data }: { data: any }) => {
  const { username } = useContext(authContext);
  const { theme } = useContext(subThemeContext);
  const router = useRouter();
  const { styling } = router.query;
  const { sub } = data.Sub;

  const isImage = theme.bodyBackground.type === 'image';

  return (
    <>
      <div className="w-full grid grid-cols-4">
        {styling && sub.username === username && <StylesSideBar />}
        <div
          className={
            styling && sub.username === username ? 'col-span-3' : 'col-span-4'
          }
        >
          <SubHeader />
          <div
            className="w-full flex py-5 justify-center"
            style={
              isImage
                ? { backgroundImage: `url('${theme.bodyBackground.value}')` }
                : { backgroundColor: theme.bodyBackground.value }
            }
          >
            <div className="w-7/12">
              <FlatCreatePost />
              <FeedMenu />
              <SubActions />
              <Card className="my-4">
                <h1>asndsjak</h1>
              </Card>
            </div>
            <div className="w-6" />
            <div className="w-4/12 ">
              <SubDescription />
              <div className="h-4" />
              <SubCustomize />
              <div className="h-4" />

              <Card>
                <h1>asndsjak</h1>
              </Card>
              <div className="h-4" />

              <Card>
                <h1>asndsjak</h1>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SubPage = ({ SSError }: { SSError: string | undefined }) => {
  const router = useRouter();
  const { subSlug } = router.query;
  const { loading, data, error } = useQuery(SUB_QUERY, {
    variables: { subSubName: subSlug || '' },
  });

  return (
    <QueryResult data={data} loading={loading} error={SSError ?? error}>
      <SubThemeProvider subResponse={data}>
        <Content data={data} />
      </SubThemeProvider>
    </QueryResult>
  );
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  try {
    const apolloClient = initializeApollo();

    const { data, error } = await apolloClient.query({
      query: SUB_QUERY,
      variables: {
        subSubName: params?.subSlug || '',
      },
    });

    if (error) throw new Error(error.message);
    if (data.Sub.success !== true) throw new Error(data.Sub.message);
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (error: any) {
    return {
      props: {
        SSError: error.message,
      },
    };
  }
}

export default SubPage;
