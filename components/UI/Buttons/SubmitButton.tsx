import { ButtonHTMLAttributes, FC } from 'react';

const SubmitButton: FC<{
  disabled: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  clickHandler?: () => void;
}> = ({ children, disabled, type = 'submit', clickHandler }) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    disabled={disabled}
    onClick={clickHandler}
    className="w-full py-2 mb-4 text-white text-sm font-normal uppercase 
    bg-blue-500 border rounded hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);

export default SubmitButton;
