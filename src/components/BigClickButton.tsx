import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}
export const BigClickButton: FC<Props> = ({ onClick }) => {
  return (
    <Button type='submit' onClick={onClick}>
      CLICK!
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 10px 40px 10px;
  width: 95%;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
