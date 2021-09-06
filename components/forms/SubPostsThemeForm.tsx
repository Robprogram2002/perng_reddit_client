import MainButton from '@components/UI/Buttons/MainButton';
import Heading from '@components/UI/Other/SideHeading';
import { subThemeContext } from '@context/SubThemeContext';
import { ChangeEvent, useContext } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { BsCloudUpload } from 'react-icons/bs';
import Sections from 'types/CustomizeSections';
import resizeFile from 'utils/imageResize';
import ChangeThemeColor from './fields/ChangeThemeColor';

const UPDATE_POSTS_THEME = gql`
  mutation updatePostsTheme(
    $updateSubPostsInput: UpdateSubPostsInput!
    $updateSubPostsPostBackground: ColorImageInput!
  ) {
    updateSubPosts(
      input: $updateSubPostsInput
      postBackground: $updateSubPostsPostBackground
    ) {
      code
      message
      success
      sub {
        id
        settings {
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

const SubPostsThemeForm = ({
  changeSection,
}: {
  // eslint-disable-next-line no-unused-vars
  changeSection: (prop: number) => void;
}) => {
  const {
    changePostTitleColor,
    changePostBackground,
    theme: { postTitleColor, postBackground },
  } = useContext(subThemeContext);
  const router = useRouter();
  const isImage = postBackground.type === 'image';

  const [mutate, { loading }] = useMutation(UPDATE_POSTS_THEME, {
    variables: {
      updateSubPostsPostBackground: postBackground,
      updateThemeInput: {
        postTitleColor,
        subName: router.query.subSlug as string,
      },
    },
    onCompleted: ({ updatePostsTheme: { success } }) => {
      if (success) {
        changeSection(Sections.Main);
      }
    },
  });

  const imageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;

    const file = files[0];
    try {
      const url = (await resizeFile(file)) as string;
      changePostBackground({ type: 'image', value: url });
    } catch (err) {
      console.log(err);
    }
  };

  const bodyColorChange = (color: string) => {
    changePostBackground({ type: 'color', value: color });
  };

  return (
    <>
      <Heading title="Posts" />
      <small className="text-gray-500 text-sm">
        These community styling options will also display in Reddit apps.
      </small>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-2"> Title Color </h3>
        <ChangeThemeColor
          initialColor={postTitleColor}
          title="Color"
          onColorChange={changePostTitleColor}
        />
      </div>
      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-3"> Post Background </h3>
        <ChangeThemeColor
          initialColor={isImage ? '#ffffff' : postBackground.value}
          title="Color"
          onColorChange={bodyColorChange}
        />
        <span className="text-sm text-gray-500">Image</span>
        <label
          htmlFor="image"
          className="h-32 w-full bg-center bg-cover text-gray-500 font-semibold bg-gray-200 rounded mb-3 flex justify-center items-center flex-col cursor-pointer"
          style={
            isImage
              ? {
                  backgroundImage: `url('${postBackground.value}')`,
                }
              : {}
          }
        >
          {!isImage && (
            <>
              <BsCloudUpload size={26} />
              <span> Upload Image </span>
            </>
          )}
        </label>
        <input
          type="file"
          id="image"
          className="hidden"
          onChange={(e) => imageChange(e)}
        />
      </div>
      <MainButton width="full" clickHandler={mutate}>
        {loading ? 'Saving ...' : 'Save'}
      </MainButton>
      <div className="h-2" />
    </>
  );
};

export default SubPostsThemeForm;
