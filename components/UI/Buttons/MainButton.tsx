import { FC } from 'react';

const MainButton: FC<{
  clickHandler?: () => void;
  filled?: boolean;
  color?: string;
  alpha?: string;
  width?: 'auto' | 'full';
}> = ({
  children,
  clickHandler,
  filled = true,
  color = 'blue',
  alpha = '500',
  width = 'auto',
}) => {
  const styles = filled
    ? `text-white bg-${color}-${alpha} hover:bg-${color}-600`
    : `text-${color}-${alpha} bg-white border border-${color}-${alpha} hover:bg-${color}-50`;

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`px-8 py-1 mx-1 text-base font-bold w-${width} border rounded-2xl ${styles}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
