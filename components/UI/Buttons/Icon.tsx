import { ReactNode } from 'react';

const Icon = ({ component }: { component: ReactNode }) => (
  <button
    type="button"
    className=" p-2 mx-1.5 flex items-center justify-center bg-transparent hover:bg-gray-200 outline-none border-none"
  >
    {component}
  </button>
);

export default Icon;
