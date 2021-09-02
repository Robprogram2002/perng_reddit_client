import { ChangeEvent } from 'react';

const SingleInput = ({
  placeholder,
  value,
  changeHandler,
}: {
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type="text"
    value={value}
    onChange={changeHandler}
    placeholder={placeholder}
    className="outline-none placeholder-gray-500 text-gray-500 border bg-gray-100 rounded w-full px-2 py-1 
      hover:border-blue-500 hover:bg-white focus:border-blue-500 focus:bg-white"
  />
);

export default SingleInput;
