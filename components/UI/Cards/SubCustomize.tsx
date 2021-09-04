import SubWidget from '@components/UI/Cards/SubWidget';
import { subThemeContext } from '@context/SubThemeContext';
import { useContext } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { useRouter } from 'next/router';
import DynamicButton from '../Buttons/DynamicButton';

const SubCustomize = () => {
  const {
    theme: { highlightColor },
  } = useContext(subThemeContext);
  const router = useRouter();

  return (
    <SubWidget title="Add Community Style">
      <p className="text-sm">
        Styling your community helps attract members. For assistance, take a
        look at the Customize Appearance Overview . Here are some great ways to
        get started.
      </p>
      <div className="h-4" />
      <div className="flex items-center">
        <GoPrimitiveDot size={28} className="text-gray-300" />
        <span className="text-sm" style={{ color: highlightColor }}>
          Add community icon
        </span>
      </div>
      <div className="flex items-center ">
        <GoPrimitiveDot size={28} className="text-gray-300" />
        <span className="text-sm" style={{ color: highlightColor }}>
          Customize banner
        </span>
      </div>
      <div className="flex items-center">
        <GoPrimitiveDot size={28} className="text-gray-300" />
        <span className="text-sm" style={{ color: highlightColor }}>
          Customize colors
        </span>
      </div>
      <div className="h-4" />
      <DynamicButton
        filled={false}
        clickHandler={() => router.push(`${router.asPath}?styling=true`)}
      >
        Customize Appearance
      </DynamicButton>
      <div className="h-4" />
    </SubWidget>
  );
};
export default SubCustomize;
