import Icon from '@components/UI/Buttons/Icon';
import { FC, useContext, ReactNode } from 'react';
import { BsChatDots, BsStar } from 'react-icons/bs';
import {
  IoMdNotificationsOutline,
  IoMdStats,
  IoMdVideocam,
} from 'react-icons/io';
import { GrAchievement, GrClose } from 'react-icons/gr';
import { appContext } from '@context/AppContext';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { FiSettings, FiTrendingUp } from 'react-icons/fi';
import { ImCoinDollar } from 'react-icons/im';

const SideMenuItem: FC<{ star?: boolean; icon: ReactNode }> = ({
  star = false,
  children,
  icon,
}) => (
  <div className="py-2 px-1 cursor-pointer hover:bg-gray-100">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <h3 className="text-sm px-2"> {children} </h3>
      </div>
      {star && <BsStar size={22} />}
    </div>
  </div>
);

const Heading = ({ text }: { text: string }) => (
  <h2 className="text-xs font-semibold uppercase my-4 text-gray-400">{text}</h2>
);

const SideBarMenu = () => {
  const {
    toggleSideBar,
    state: { openSideBar },
  } = useContext(appContext);

  return (
    <menu
      className={`fixed bg-white h-screen w-72 z-50 border-t border-r py-4 px-5 m-0 overflow-y-auto ${
        openSideBar ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute right-3">
        <Icon
          component={<GrClose size={20} className="text-gray-200" />}
          clickHandler={() => toggleSideBar(false)}
        />
      </div>
      <Heading text="my communities" />
      <input
        type="text"
        placeholder="Filter"
        className="outline-none placeholder-gray-500 text-gray-500 border bg-gray-100 rounded w-full px-2 py-1 my-2 
      hover:border-blue-500 hover:bg-white focus:border-blue-500 focus:bg-white"
      />
      <Heading text="favorites" />
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <Heading text="Moderating" />
      <SideMenuItem icon={<IoMdNotificationsOutline size={22} />}>
        Mod Queue
      </SideMenuItem>
      <SideMenuItem icon={<IoMdNotificationsOutline size={22} />}>
        Mod mail
      </SideMenuItem>
      <SideMenuItem icon={<IoMdNotificationsOutline size={22} />}>
        r/Mod
      </SideMenuItem>
      <SideMenuItem icon={<FaRegUserCircle size={22} />} star>
        r/perosnalCommunity
      </SideMenuItem>
      <Heading text="my communities" />
      <SideMenuItem icon={<AiOutlinePlus size={22} />}>
        Create Community
      </SideMenuItem>
      <SideMenuItem icon={<FaRegUserCircle size={22} />} star>
        r/announcements
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        r/announcements
      </SideMenuItem>
      <Heading text="following" />
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        u/drackeoo
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        u/drackeoo
      </SideMenuItem>
      <SideMenuItem star icon={<FaRegUserCircle size={22} />}>
        u/drackeoo
      </SideMenuItem>
      <Heading text="feeds" />
      <SideMenuItem icon={<AiFillHome size={22} />}> Home </SideMenuItem>
      <SideMenuItem icon={<FiTrendingUp size={22} />}> Popular </SideMenuItem>
      <SideMenuItem icon={<IoMdStats size={22} />}> All </SideMenuItem>
      <SideMenuItem icon={<IoMdVideocam size={22} />}>Reddit Live</SideMenuItem>
      <Heading text="other" />
      <SideMenuItem icon={<FiSettings size={22} />}>User Settings</SideMenuItem>
      <SideMenuItem icon={<BsChatDots size={22} />}> Messages </SideMenuItem>
      <SideMenuItem icon={<AiOutlinePlus size={22} />}>
        Create Post
      </SideMenuItem>
      <SideMenuItem icon={<GrAchievement size={22} />}>
        Top Communities
      </SideMenuItem>
      <SideMenuItem icon={<IoMdNotificationsOutline size={22} />}>
        Notifications
      </SideMenuItem>
      <SideMenuItem icon={<ImCoinDollar size={22} />}> Coins </SideMenuItem>
      <SideMenuItem icon={<FaRegUserCircle size={22} />}> Avatar </SideMenuItem>
      <SideMenuItem icon={<ImCoinDollar size={22} />}> Premium </SideMenuItem>

      <div className="h-12" />
    </menu>
  );
};

export default SideBarMenu;
