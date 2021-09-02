import { FC } from 'react';

const Modal: FC<{ width: string; height: string; isOpen: boolean }> = ({
  children,
  height,
  width,
  isOpen,
}) => (
  <div
    className={`fixed z-50 w-screen h-screen bg-black bg-opacity-70  items-start justify-center ${
      isOpen ? 'flex' : 'hidden'
    } `}
  >
    <div
      className={`bg-white rounded-md relative overflow-hidden mt-5 ${width} ${height}`}
    >
      {children}
    </div>
  </div>
);

export default Modal;
