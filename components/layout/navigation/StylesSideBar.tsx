import Icon from '@components/UI/Buttons/Icon';
import { GrClose } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';
import MainButton from '@components/UI/Buttons/MainButton';
import { useState, useContext } from 'react';
import ColorThemeForm from '@components/forms/ColorThemeForm';
import Sections from 'types/CustomizeSections';
import { useRouter } from 'next/router';
import { subThemeContext } from '@context/SubThemeContext';
import SubProfileForm from '@components/forms/SubProfileForm';
import SubBannerForm from '@components/forms/SubBannerForm';
import SubPostsThemeForm from '@components/forms/SubPostsThemeForm';
import StylesMenu from './StylesMenu';

const StylesSideBar = () => {
  const { resetTheme } = useContext(subThemeContext);
  const [section, setSection] = useState(Sections.Main);
  const router = useRouter();

  const changeSection = (index: number) => setSection(index);

  const menuSections = {
    [Sections.Main]: <StylesMenu changeSection={changeSection} />,
    [Sections.Theme]: <ColorThemeForm changeSection={changeSection} />,
    [Sections.Profile]: <SubProfileForm changeSection={changeSection} />,
    [Sections.Banner]: <SubBannerForm changeSection={changeSection} />,
    [Sections.Menu]: <h1>Menu</h1>,
    [Sections.Posts]: <SubPostsThemeForm changeSection={changeSection} />,
  };

  return (
    <>
      <div
        className="sidebar fixed top-14 left-0 bg-white w-1/4 overflow-y-scroll z-20 
              border-t border-r p-4"
      >
        <div className="flex items-center">
          <IoIosArrowBack size={20} className="cursor-pointer" />
          <h3 className="text-base font-medium cursor-pointer">
            Back to mod tools
          </h3>
        </div>

        <div className="absolute top-2 right-1">
          <Icon
            component={<GrClose size={20} className="text-gray-200" />}
            clickHandler={() => router.push(`/r/${router.query.subSlug}`)}
          />
        </div>
        <div className="h-6" />

        {menuSections[section]}

        {section !== Sections.Main && (
          <MainButton
            width="full"
            filled={false}
            clickHandler={() => {
              setSection(Sections.Main);
              resetTheme();
            }}
          >
            Cancel
          </MainButton>
        )}

        <div className="h-8" />
      </div>
      <div className="col-span-1" />
    </>
  );
};

export default StylesSideBar;
