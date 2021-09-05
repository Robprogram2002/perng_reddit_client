import MainButton from '@components/UI/Buttons/MainButton';
import Heading from '@components/UI/Other/SideHeading';
import { subThemeContext } from '@context/SubThemeContext';
import { ChangeEvent, useContext } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Resizer from 'react-image-file-resizer';
import { BsCloudUpload } from 'react-icons/bs';
import ChangeThemeColor from './fields/ChangeThemeColor';

const UPDATE_THEME = gql`
  mutation updateSubTheme($updateThemeInput: UpdateSubThemeInput!) {
    updateTheme(input: $updateThemeInput) {
      code
      message
      success
      sub {
        id
        settings {
          id
          bannerSize
          baseColor
          bodyBackground
          highlightColor
          postBackground
          postTitleColor
        }
      }
    }
  }
`;

const ColorThemeForm = () => {
  const { changeBaseColor, changeBodyBackground, changeHighlightColor, theme } =
    useContext(subThemeContext);
  const router = useRouter();
  const isImage = theme.bodyBackground.includes('data:image');

  const [mutate, { loading }] = useMutation(UPDATE_THEME, {
    variables: {
      updateThemeInput: {
        ...theme,
        subName: router.query.subSlug,
      },
    },
  });

  // const readURL = (file: File) =>
  //   new Promise((res, rej) => {
  //     const reader = new FileReader();
  //     reader.onload = (e) => res(e.target!.result);
  //     reader.onerror = (e) => rej(e);
  //     reader.readAsDataURL(file);
  //   });

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });

  const imageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;

    const file = files[0];
    // const url = (await readURL(file)) as string;
    // changeBodyBackground(url);
    try {
      const url = (await resizeFile(file)) as string;
      changeBodyBackground(url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Heading title="Color Theme" />
      <small className="text-gray-500 text-sm">
        These community styling options will also display in Reddit apps.
      </small>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-2"> Theme Colors </h3>
        <ChangeThemeColor
          initialColor={theme.baseColor}
          title="Base"
          onColorChange={changeBaseColor}
        />
        <ChangeThemeColor
          initialColor={theme.highlightColor}
          title="Highlight"
          onColorChange={changeHighlightColor}
        />
      </div>
      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-3"> Body Background </h3>
        <ChangeThemeColor
          initialColor={isImage ? '#bbb6b6' : theme.bodyBackground}
          title="Color"
          onColorChange={changeBodyBackground}
        />
        <span className="text-sm text-gray-500">Image</span>
        <label
          htmlFor="image"
          className="h-32 w-full bg-center bg-cover bg-gray-200 rounded mb-3 flex justify-center items-center flex-col cursor-pointer"
          style={
            isImage
              ? {
                  backgroundImage: `url('${theme.bodyBackground}')`,
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

export default ColorThemeForm;
