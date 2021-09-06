import { useMutation, gql } from '@apollo/client';
import MainButton from '@components/UI/Buttons/MainButton';
import Heading from '@components/UI/Other/SideHeading';
import { subThemeContext } from '@context/SubThemeContext';
import Sections from 'types/CustomizeSections';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import resizeFile from 'utils/imageResize';
import RadioButtonInput from './fields/RadioButtonInput';
import SingleInput from './fields/SingleInput';

const UPDATE_PROFILE = gql`
  mutation updateSubProfile($updateProfileInput: UpdateSubProfileInput!) {
    updateProfile(input: $updateProfileInput) {
      code
      message
      success
      sub {
        id
        settings {
          title
          profile {
            publicId
            url
          }
        }
      }
    }
  }
`;

const SubProfileForm = ({
  changeSection,
}: {
  // eslint-disable-next-line no-unused-vars
  changeSection: (prop: number) => void;
}) => {
  const {
    changeTitle,
    changeProfileImage,
    theme: { title, profile },
  } = useContext(subThemeContext);
  const router = useRouter();

  const [mutate, { loading }] = useMutation(UPDATE_PROFILE, {
    variables: {
      updateProfileInput: {
        subName: router.query.subSlug as string,
        imageBase: profile && profile.publicId === 'new' ? profile.url : null,
        title,
      },
    },
    onCompleted: ({ updateProfile: { success, sub } }) => {
      if (success) {
        changeProfileImage(sub.settings.profile);
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
      changeProfileImage({ publicId: 'new', url });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Heading title="Name & Icon" />
      <small className="text-gray-500 text-sm">
        Title must be shown next to the sub name if the last is selected to be
        show
      </small>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-2"> Community Title </h3>
        <SingleInput
          placeholder="Type here ..."
          changeHandler={(e) => changeTitle(e.target.value)}
          value={title ?? ''}
        />
        <div className="h-4" />
      </div>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-2"> Community Name Format </h3>
        <RadioButtonInput name="hide" value="hide" changeHandler={() => {}}>
          <span className="text-gray-500 text-sm"> Hide name </span>
        </RadioButtonInput>
        <RadioButtonInput name="together" value="hide" changeHandler={() => {}}>
          <span className="text-gray-500 text-sm"> Name & Title </span>
        </RadioButtonInput>
        <RadioButtonInput name="only" value="hide" changeHandler={() => {}}>
          <span className="text-gray-500 text-sm"> Only name </span>
        </RadioButtonInput>
        <div className="h-4" />
      </div>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-3"> Community Icon </h3>
        <span className="text-sm text-gray-500">Custom Image</span>
        <label
          htmlFor="image"
          className="h-32 w-full bg-center bg-cover text-gray-500 font-semibold bg-gray-200 rounded mb-3 flex justify-center items-center flex-col cursor-pointer"
          style={
            profile
              ? {
                  backgroundImage: `url('${profile.url}')`,
                }
              : {}
          }
        >
          {!profile && (
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

export default SubProfileForm;
