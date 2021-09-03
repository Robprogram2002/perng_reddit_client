import { FC } from 'react';

const Card: FC<{ className?: string; padding?: boolean }> = ({
  children,
  className,
  padding = true,
}) => (
  <div
    className={`bg-white rounded-md border border-gray-300  ${className} ${
      padding && 'px-3 py-1.5 shadow-sm'
    }`}
  >
    {children}
  </div>
);

export default Card;
