import React, { FC } from 'react';

import styled from 'styled-components';

export const Error: FC = () => {
  return <Wrapper>Something went wrong.</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-style: italic;
  font-weight: lighter;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 50px;
  color: ${({ theme }) => theme.colors.error};
`;
