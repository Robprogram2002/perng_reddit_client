import DynamicButton from '@components/UI/Buttons/DynamicButton';
import { subThemeContext } from '@context/SubThemeContext';
import { BannerSizes } from 'types/BannerSizes';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Title = () => {
  const {
    theme: { title },
  } = useContext(subThemeContext);
  const router = useRouter();
  const subName = router.query.subSlug as string;

  let text = subName;

  if (title) {
    text = `${subName} : ${title}`;
  }

  return <h1 className="text-3xl font-semibold mr-4">{text}</h1>;
};

const SubHeader = () => {
  const {
    theme: { baseColor, profile, bannerSize, banner },
  } = useContext(subThemeContext);

  return (
    <div className="">
      <div
        className="bg-center bg-cover"
        style={
          banner
            ? {
                backgroundImage: `url('${banner.url}')`,
                height: BannerSizes[bannerSize],
              }
            : { backgroundColor: baseColor, height: BannerSizes[bannerSize] }
        }
      />
      <div className="bg-white relative flex justify-center">
        <div
          className="w-28 h-28 absolute bg-center bg-cover -top-8 left-32 rounded-full border-8 border-white flex justify-center items-center"
          style={
            profile
              ? { backgroundImage: `url('${profile.url}')` }
              : { backgroundColor: baseColor }
          }
        >
          {!profile && (
            <span className="font-bold text-5xl text-white">r/</span>
          )}
        </div>
        <div className="w-3/5 flex flex-col pt-2 ">
          <div className="flex items-start">
            <Title />
            <DynamicButton filled={false} width="auto" clickHandler={() => {}}>
              Join
            </DynamicButton>
          </div>
          <span className="text-gray-500">r/secondPersonalComm</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
