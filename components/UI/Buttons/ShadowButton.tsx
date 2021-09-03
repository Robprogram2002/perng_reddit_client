import { FC } from 'react';

const ShadowButton: FC = ({ children }) => (
  <button
    type="button"
    className="outline-none border rounded cursor-pointer bg-gray-100 text-blue-500 px-3 py-1.5 
    hover:border-blue-500 text-sm w-full text-left font-medium my-2"
  >
    {children}
  </button>
);

export default ShadowButton;
