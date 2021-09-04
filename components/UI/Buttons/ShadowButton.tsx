import { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.color};
  &:hover {
    border: 1px solid ${(props) => props.color};
  }
`;

const ShadowButton: FC<{ color?: string }> = ({ children, color = '#ccc' }) => (
  <Button
    type="button"
    className="outline-none border rounded cursor-pointer bg-gray-100  px-3 py-1.5 
     text-sm w-full text-left font-medium my-2"
    color={color}
  >
    {children}
  </Button>
);

export default ShadowButton;
