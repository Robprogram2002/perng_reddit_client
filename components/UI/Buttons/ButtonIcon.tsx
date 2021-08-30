import { FC, ReactNode } from 'react';

const ButtonIcon: FC<{ component: ReactNode }> = ({ children, component }) => (
  <button
    type="button"
    className="grid grid-cols-5 w-full outline-none  border border-blue-600 rounded  my-4 hover:bg-blue-500 group"
  >
    <div className=" flex justify-center items-center h-full  ">
      <div className=" group-hover:bg-white rounded px-2 py-1 ">
        {component}
      </div>
    </div>
    <span className="py-3 col-span-4 text-blue-500 uppercase text-base font-semibold hover:text-white">
      {children}
    </span>
  </button>
);

export default ButtonIcon;
