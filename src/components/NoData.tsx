import React, { FC } from 'react';

import styled from 'styled-components';

export const NoData: FC = () => {
  return <Wrapper>No data to display.</Wrapper>;
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
`;
