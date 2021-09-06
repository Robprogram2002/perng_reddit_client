import { useMutation, gql } from '@apollo/client';
import MainButton from '@components/UI/Buttons/MainButton';
import Heading from '@components/UI/Other/SideHeading';
import { subThemeContext } from '@context/SubThemeContext';
import Sections from 'types/CustomizeSections';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import resizeFile from 'utils/imageResize';
import { BannerSizes, Size } from 'types/BannerSizes';
import RadioButtonInput from './fields/RadioButtonInput';

const UPDATE_BANNER = gql`
  mutation updateSubBanner($updateBannerInput: UpdateSubBannerInput!) {
    updateBanner(input: $updateBannerInput) {
      code
      message
      success
      sub {
        id
        settings {
          banner {
            publicId
            url
          }
          bannerSize
        }
      }
    }
  }
`;

const SubBannerForm = ({
  changeSection,
}: {
  // eslint-disable-next-line no-unused-vars
  changeSection: (prop: number) => void;
}) => {
  const {
    theme: { bannerSize, banner },
    changeBannerImage,
    changeBannerSize,
  } = useContext(subThemeContext);
  const router = useRouter();

  const [mutate, { loading }] = useMutation(UPDATE_BANNER, {
    variables: {
      updateBannerInput: {
        subName: router.query.subSlug as string,
        imageBase: banner && banner.publicId === 'new' ? banner.url : null,
        size: bannerSize,
      },
    },
    onCompleted: ({ updateBanner: { success, sub } }) => {
      if (success) {
        changeBannerImage(sub.settings.banner);
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
      changeBannerImage({ publicId: 'new', url });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    changeBannerSize(e.target.name as Size);
  };

  return (
    <>
      <Heading title="Banner & Size" />
      <small className="text-gray-500 text-sm">
        Title must be shown next to the sub name if the last is selected to be
        show
      </small>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-2"> Community Banner Size </h3>
        <RadioButtonInput
          name={Size.Small}
          value={bannerSize}
          changeHandler={onChangeRadio}
        >
          <p>
            {Size.Small}
            <span className="text-gray-500 text-sm">{BannerSizes.Small}</span>
          </p>
        </RadioButtonInput>
        <RadioButtonInput
          name={Size.Medium}
          value={bannerSize}
          changeHandler={onChangeRadio}
        >
          <p>
            {Size.Medium}
            <span className="text-gray-500 text-sm">{BannerSizes.Medium}</span>
          </p>
        </RadioButtonInput>
        <RadioButtonInput
          name={Size.Large}
          value={bannerSize}
          changeHandler={onChangeRadio}
        >
          <p>
            {Size.Large}
            <span className="text-gray-500 text-sm">{BannerSizes.Large}</span>
          </p>
        </RadioButtonInput>
        <div className="h-4" />
      </div>

      <div className="border-b border-gray-300 my-3">
        <h3 className="text-sm text-semibold my-3"> Community Banner Image </h3>
        <span className="text-sm text-gray-500">Custom Image</span>
        <label
          htmlFor="image"
          className="h-32 w-full bg-center bg-cover text-gray-500 font-semibold bg-gray-200 rounded mb-3 flex justify-center items-center flex-col cursor-pointer"
          style={
            banner
              ? {
                  backgroundImage: `url('${banner.url}')`,
                }
              : {}
          }
        >
          {!banner && (
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

export default SubBannerForm;
