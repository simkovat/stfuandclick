import React, { FC } from 'react';

import styled from 'styled-components';

export const Error: FC = () => {
  return <Wrapper>Sorry, something went wrong.</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-style: italic;
  font-weight: lighter;
  background-color: transparent;
  padding: 30px;
  color: ${({ theme }) => theme.colors.error};
`;
