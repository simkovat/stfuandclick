import React, { FC } from 'react';

import styled from 'styled-components';

export const Loading: FC = () => {
  return <Wrapper>Loading...</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-style: italic;
  font-weight: lighter;
  background-color: #fff;
  padding: 50px;
`;
