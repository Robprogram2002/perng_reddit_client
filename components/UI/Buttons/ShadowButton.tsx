import { subThemeContext } from '@context/SubThemeContext';
import { FC, useContext } from 'react';
import styled from 'styled-components';

const Button = styled('button')<{ color: string }>`
  color: ${({ color }) => color};
  &:hover {
    border: 1px solid ${({ color }) => color};
  }
`;

const ShadowButton: FC = ({ children }) => {
  const {
    theme: { highlightColor },
  } = useContext(subThemeContext);

  return (
    <Button
      color={highlightColor}
      type="button"
      className="outline-none border rounded cursor-pointer bg-gray-100  px-3 py-1.5 
     text-sm w-full text-left font-medium my-2"
    >
      {children}
    </Button>
  );
};

export default ShadowButton;
