import Card from '@components/UI/Cards/Card';
import { gql } from '@apollo/client';
import QueryResult from '@components/HOC/QueryResult';
import client from 'utils/apollo_client';
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

const SUB_QUERY = gql`
  query ($subSubName: String!) {
    Sub(subName: $subSubName) {
      code
      message
      success
      sub {
        id
        bannerUrl
        profileUrl
        description
        name
        username
        createdAt
        type
        title
        settings {
          id
          bannerSize
          baseColor
          bodyBackground
          highlightColor
          postTitleColor
          postBackground
        }
      }
    }
  }
`;

const Content = () => {
  const { theme } = useContext(subThemeContext);
  const isImage = theme.bodyBackground.includes('data:image');

  return (
    <>
      <SubHeader />
      <div
        className="w-full flex py-5 justify-center"
        // style={{ backgroundColor: theme.bodyBackground }}
        style={
          isImage
            ? { backgroundImage: `url('${theme.bodyBackground}')` }
            : { backgroundColor: theme.bodyBackground }
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
    </>
  );
};

const SubPage = ({ data, error }: { data: any; error: any }) => {
  const { username } = useContext(authContext);
  const router = useRouter();
  const { styling } = router.query;
  const { __typename, id, ...theme } = data.settings;

  return (
    <QueryResult data={data} loading={false} error={error}>
      <SubThemeProvider initialTheme={theme}>
        <div className="w-full grid grid-cols-4">
          {styling && data.username === username && <StylesSideBar />}
          <div
            className={
              styling && data.username === username
                ? 'col-span-3'
                : 'col-span-4'
            }
          >
            <Content />
          </div>
        </div>
      </SubThemeProvider>
    </QueryResult>
  );
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  try {
    const { data, error } = await client.query({
      query: SUB_QUERY,
      variables: {
        subSubName: params?.subSlug || '',
      },
    });

    if (error) throw new Error(error.message);
    if (data.Sub.success !== true) throw new Error(data.Sub.message);

    return {
      props: {
        data: data.Sub.sub,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default SubPage;
