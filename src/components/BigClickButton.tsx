import { FC } from 'react';
import { PendingButton } from './PendingButton';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  isPending: boolean;
}
export const BigClickButton: FC<Props> = ({ onClick, isPending }) => {
  return (
    <Button type='submit' onClick={onClick} isPending={isPending}>
      CLICK!
    </Button>
  );
};

const Button = styled(PendingButton)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 10px 40px 10px;
  width: 95%;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
