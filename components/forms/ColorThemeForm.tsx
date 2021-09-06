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

const UPDATE_THEME = gql`
  mutation (
    $updateThemeBodyBackground: ColorImageInput!
    $updateThemeInput: UpdateSubThemeInput!
  ) {
    updateTheme(
      bodyBackground: $updateThemeBodyBackground
      input: $updateThemeInput
    ) {
      code
      message
      success
      sub {
        id
        settings {
          baseColor
          highlightColor
          bodyBackground {
            type
            value
          }
        }
      }
    }
  }
`;

const ColorThemeForm = ({
  changeSection,
}: {
  // eslint-disable-next-line no-unused-vars
  changeSection: (prop: number) => void;
}) => {
  const {
    changeBaseColor,
    changeBodyBackground,
    changeHighlightColor,
    theme: { baseColor, highlightColor, bodyBackground },
  } = useContext(subThemeContext);
  const router = useRouter();
  const isImage = bodyBackground.type === 'image';

  const [mutate, { loading }] = useMutation(UPDATE_THEME, {
    variables: {
      updateThemeBodyBackground: bodyBackground,
      updateThemeInput: {
        baseColor,
        highlightColor,
        subName: router.query.subSlug as string,
      },
    },
    onCompleted: ({ updateTheme: { success } }) => {
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
      changeBodyBackground({ type: 'image', value: url });
    } catch (err) {
      console.log(err);
    }
  };

  const bodyColorChange = (color: string) => {
    changeBodyBackground({ type: 'color', value: color });
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
          initialColor={baseColor}
          title="Base"
          onColorChange={changeBaseColor}
        />
        <ChangeThemeColor
          initialColor={highlightColor}
          title="Highlight"
          onColorChange={changeHighlightColor}
        />
      </div>
      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-3"> Body Background </h3>
        <ChangeThemeColor
          initialColor={isImage ? '#bbb6b6' : bodyBackground.value}
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
                  backgroundImage: `url('${bodyBackground.value}')`,
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
