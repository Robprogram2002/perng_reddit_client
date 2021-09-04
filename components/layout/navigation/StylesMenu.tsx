import ShadowButton from '@components/UI/Buttons/ShadowButton';
import Heading from '@components/UI/Other/SideHeading';
import { IoIosArrowForward } from 'react-icons/io';
import Sections from 'types/CustomizeSections';

const RowItem = ({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: () => void;
}) => (
  <div
    className="flex justify-between items-center cursor-pointer py-2 border-b border-gray-300 text-sm font-normal"
    onClick={clickHandler}
    onKeyDown={clickHandler}
    role="menuitem"
    tabIndex={0}
  >
    <span> {text} </span>
    <IoIosArrowForward size={26} className="text-gray-500" />
  </div>
);

const StylesMenu = ({
  changeSection,
}: {
  // eslint-disable-next-line no-unused-vars
  changeSection: (prop: number) => void;
}) => (
  <>
    <Heading title="Appareance" />
    <RowItem
      text="Color Theme"
      clickHandler={() => {
        changeSection(Sections.Theme);
      }}
    />
    <RowItem
      text="Name & icon"
      clickHandler={() => {
        changeSection(Sections.Profile);
      }}
    />
    <RowItem
      text="Banner"
      clickHandler={() => {
        changeSection(Sections.Banner);
      }}
    />
    <RowItem
      text="Menu"
      clickHandler={() => {
        changeSection(Sections.Menu);
      }}
    />
    <RowItem
      text="Posts"
      clickHandler={() => {
        changeSection(Sections.Posts);
      }}
    />
    <RowItem text="Css" clickHandler={() => {}} />
    <div className="h-4" />

    <ShadowButton>RESET TO DEFAULTS</ShadowButton>

    <div className="h-4" />

    <Heading title="Structures" />
    <RowItem text="Menu Links" clickHandler={() => {}} />
    <RowItem text="Sidebar widgets" clickHandler={() => {}} />
  </>
);

export default StylesMenu;
