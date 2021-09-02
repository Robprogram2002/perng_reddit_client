import { FC } from 'react';

const MainButton: FC<{
  clickHandler?: () => void;
  filled?: boolean;
}> = ({ children, clickHandler, filled = true }) => (
  <button
    type="button"
    onClick={clickHandler}
    className={`px-4 py-1.5 mx-1 text-base font-bold  
     border rounded-2xl ${
       filled
         ? 'text-white bg-blue-500 hover:bg-blue-600'
         : 'text-blue-500 bg-white border border-blue-500 hover:bg-blue-50'
     }`}
  >
    {children}
  </button>
);

export default MainButton;
