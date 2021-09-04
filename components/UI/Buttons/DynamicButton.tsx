import { FC } from 'react';
import styled from 'styled-components';

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
  color: ${(props) => (props.filled ? 'white' : props.color)};
  background-color: ${(props) => (props.filled ? props.color : 'white')};
  border: 1px solid ${(props) => props.color};

  &:hover {
    opacity: 0.9;
  }
`;

const DynamicButton: FC<{
  clickHandler?: () => void;
  filled?: boolean;
  color: string;
  width?: 'full' | 'auto';
}> = ({ children, clickHandler, filled = true, color, width = 'full' }) => (
  <Button
    color={color}
    width={width}
    filled={filled}
    type="button"
    onClick={clickHandler}
  >
    {children}
  </Button>
);

export default DynamicButton;
