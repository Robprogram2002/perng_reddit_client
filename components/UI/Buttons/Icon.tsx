import { ReactNode } from 'react';

const Icon = ({
  component,
  clickHandler,
}: {
  component: ReactNode;
  clickHandler: () => void;
}) => (
  <button
    type="button"
    onClick={clickHandler}
    className=" p-2 mx-1.5 flex items-center justify-center bg-transparent hover:bg-gray-200 outline-none border-none"
  >
    {component}
  </button>
);

export default Icon;
