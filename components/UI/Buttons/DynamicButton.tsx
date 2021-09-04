import { FC, useContext } from 'react';
import styled from 'styled-components';
import { subThemeContext } from '@context/SubThemeContext';

const Button = styled('button')<{
  color: string;
  filled: boolean;
  width: string;
}>`
  padding: 5px 32px;
  font-size: 1rem;
  font-weight: 500;
  width: ${(props) => (props.width === 'full' ? '100%' : 'auto')};
  border-radius: 16px;
  outline: none;
  color: ${({ filled, color }) => (filled ? 'white' : color)};
  background-color: ${({ filled, color }) => (filled ? color : 'white')};
  border: 1px solid ${({ color }) => color};

  &:hover {
    opacity: 0.9;
  }
`;

const DynamicButton: FC<{
  clickHandler?: () => void;
  filled?: boolean;
  width?: 'full' | 'auto';
}> = ({ children, clickHandler, filled = true, width = 'full' }) => {
  const { theme } = useContext(subThemeContext);

  return (
    <Button
      color={theme.highlightColor}
      width={width}
      filled={filled}
      type="button"
      onClick={clickHandler}
    >
      {children}
    </Button>
  );
};

export default DynamicButton;
