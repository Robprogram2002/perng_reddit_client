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

const SUB_QUERY = gql`
  query ($subSubName: String!) {
    Sub(subName: $subSubName) {
      code
      message
      success
      sub {
        bannerUrl
        profileUrl
        description
        name
        username
        createdAt
        type
        title
        settings {
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

const Content = ({ data }: { data: any }) => (
  <>
    <SubHeader
      baseColor={data.settings.baseColor}
      highlightColor={data.settings.highlightColor}
    />
    <div className="w-full flex py-5 justify-center">
      <div className="w-6/12">
        <FlatCreatePost />
        <FeedMenu highlightColor={data.settings.highlightColor} />
        <SubActions />
        <Card className="my-4">
          <h1>asndsjak</h1>
        </Card>
      </div>
      <div className="w-4" />
      <div className="w-4/12 ">
        <SubDescription
          baseColor={data.settings.baseColor}
          highlightColor={data.settings.highlightColor}
        />
        <div className="h-4" />
        <SubCustomize
          baseColor={data.settings.baseColor}
          highlightColor={data.settings.highlightColor}
        />
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

const SubPage = ({ data, error }: { data: any; error: any }) => {
  const { username } = useContext(authContext);
  const router = useRouter();
  const { style } = router.query;
  console.log(data);

  return (
    <QueryResult data={data} loading={false} error={error}>
      <div className="w-full grid grid-cols-5">
        {style && data.username === username && <StylesSideBar />}
        <div className={style ? 'col-span-4' : 'col-span-5'}>
          <Content data={data} />
        </div>
      </div>
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
