import { useRouter } from 'next/router';
import MainButton from '@components/UI/Buttons/MainButton';
import { FaRedditAlien } from 'react-icons/fa';
import { FiSearch, FiTrendingUp } from 'react-icons/fi';
import { AiOutlineUser, AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  IoMdNotificationsOutline,
  IoMdStats,
  IoMdVideocam,
} from 'react-icons/io';
import { BsChatDots } from 'react-icons/bs';
import Icon from '@components/UI/Buttons/Icon';
import { authContext } from '@context/AuthContext';
import { useContext } from 'react';
import UserActionsDropdDown from '@components/UI/DropDown/UserActionsDropdDown';

const Menu = () => {
  const router = useRouter();

  return (
    <div className="py-2 px-3 bg-white flex fixed top-0 left-0 w-screen">
      <div className="w-2/12 flex items-center">
        <div className="bg-red-600 rounded-full p-2 text-white">
          <FaRedditAlien size={22} />
        </div>
        <h2 className="text-lg font-bold px-2 ">Reddit</h2>
      </div>
      <div className="w-8/12 flex justify-center">
        <div className="w-4/5">
          <div className="flex border border-gray-300 bg-gray-100 h-full hover:border-blue-400 focus-within:border-blue-400 ">
            <div className="w-1/12 mx-2 flex items-center justify-center">
              <FiSearch size={22} className="text-gray-500 " />
            </div>
            <input
              type="text"
              placeholder="Search in reddit"
              className="h-full w-11/12 bg-transparent placeholder-gray-500 outline-none"
            />
          </div>
        </div>
      </div>
      <MainButton filled={false} clickHandler={() => router.push('/login')}>
        Login
      </MainButton>
      <MainButton clickHandler={() => router.push('/register')}>
        Register
      </MainButton>
      <div
        className="border px-3 py-2 border-gray-200 rounded cursor-pointer flex items-center justify-center
      h-full hover:border-gray-300 "
      >
        <AiOutlineUser size={22} />
        <MdKeyboardArrowDown size={22} />
      </div>
    </div>
  );
};

const AuthMenu = () => (
  <div className="py-2.5 px-3 bg-white flex fixed w-full z-50 border-b border-gray-300">
    <div className="flex items-center px-3">
      <div className="bg-red-600 rounded-full p-2 text-white">
        <FaRedditAlien size={22} />
      </div>
      <h2 className="text-lg font-bold px-2 ">Reddit</h2>
    </div>
    <UserActionsDropdDown />
    <div className="w-3/12">
      <div className="flex border border-gray-200 rounded bg-gray-100 h-full hover:border-blue-400 focus-within:border-blue-400 ">
        <div className="flex px-2 items-center justify-center">
          <FiSearch size={22} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search in reddit"
          className="h-full bg-transparent placeholder-gray-500 outline-none "
        />
      </div>
    </div>
    <div className="flex items-center px-2">
      <Icon component={<FiTrendingUp size={22} />} clickHandler={() => {}} />
      <Icon component={<IoMdStats size={22} />} clickHandler={() => {}} />
      <Icon component={<IoMdVideocam size={22} />} clickHandler={() => {}} />
      <Icon component={<BsChatDots size={22} />} clickHandler={() => {}} />
      <Icon
        component={<IoMdNotificationsOutline size={22} />}
        clickHandler={() => {}}
      />
      <Icon component={<AiOutlinePlus size={22} />} clickHandler={() => {}} />
    </div>
    <div
      className="border border-transparent flex justify-between items-center px-2 rounded 
    w-2/12 mx-3 cursor-pointer hover:border-gray-200 "
    >
      <div className="flex items-center">
        <AiFillHome size={26} />
        <div className="flex flex-col justify-center px-2">
          <small className="text-xs">robert_mr_2002</small>
          <small className="text-xs text-gray-400 font-semibold">1 Karma</small>
        </div>
      </div>
      <MdKeyboardArrowDown size={22} />
    </div>
  </div>
);

const HeadMenu = () => {
  const { authenticated } = useContext(authContext);

  if (authenticated) {
    return (
      <>
        <AuthMenu />
        <div style={{ height: '48px' }} />
      </>
    );
  }

  return <Menu />;
};
export default HeadMenu;
