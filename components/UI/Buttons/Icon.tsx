import { ReactNode } from 'react';

type Props = {
  component: ReactNode;
  clickHandler: () => void;
  text?: string;
};

const Icon = ({ component, clickHandler, text }: Props) => (
  <button
    type="button"
    onClick={clickHandler}
    className={` mx-1 p-2 flex items-center justify-center bg-transparent text-gray-500  
    hover:bg-gray-200 outline-none border-none ${
      text ? 'rounded-2xl px-3' : 'rounded'
    }`}
  >
    {component}
    {text && <span className="ml-2 text-base font-semibold"> {text} </span>}
  </button>
);

Icon.defaultProps = {
  text: '',
};

export default Icon;
