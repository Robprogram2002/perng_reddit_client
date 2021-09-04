import { ReactNode } from 'react';

type Props = {
  component: ReactNode;
  clickHandler: () => void;
  text?: string;
  color?: string;
  active?: boolean;
};

const Icon = ({
  component,
  clickHandler,
  text,
  color,
  active = false,
}: Props) => (
  <button
    type="button"
    onClick={clickHandler}
    className={` mx-1 p-2 flex items-center justify-center bg-transparent text-gray-500  
    hover:bg-gray-200 outline-none border-none ${
      text ? 'rounded-2xl px-3' : 'rounded'
    }`}
    style={color && active ? { color } : {}}
  >
    {component}
    {text && <span className="ml-2 text-base font-semibold"> {text} </span>}
  </button>
);

Icon.defaultProps = {
  text: '',
  color: undefined,
  active: false,
};

export default Icon;
