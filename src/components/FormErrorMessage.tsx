import React, { FC } from 'react';

import styled from 'styled-components';

export interface Props {
  message?: string;
}

export const ErrorMessage: FC<Props> = ({ message }) =>
  message ? <ErrorMessageComponent>{message}</ErrorMessageComponent> : null;

const ErrorMessageComponent = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 13px;
  margin: 2px 0 8px 0;
  padding-left: 30px;
  text-align: right;
`;
