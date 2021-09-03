import { appContext } from '@context/AppContext';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

const UserActionsDropdDown = () => {
  const {
    toggleSideBar,
    state: { openSideBar },
  } = useContext(appContext);

  const clickHandler = () => {
    toggleSideBar(true);
  };

  return (
    <div
      className={`flex border border-transparent justify-between items-center px-2 text-gray-600 rounded w-1/5 mx-3  ${
        !openSideBar && ' border-gray-200 cursor-pointer'
      } `}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="menubar"
      tabIndex={0}
    >
      <div className="flex items-center">
        <AiFillHome size={20} />
        <span className="px-1">Home</span>
      </div>
      <MdKeyboardArrowDown size={22} />
    </div>
  );
};

export default UserActionsDropdDown;
