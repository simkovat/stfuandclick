import React, { FC } from 'react';

import styled from 'styled-components';

export const Footer: FC = () => {
  return (
    <Wrapper>
      <span>
        If you don't like this page, it's
        <a href='https://www.applifting.cz/'> Applifting</a>'s fault.
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-style: italic;
  font-weight: lighter;
  background-color: lightgrey;
  padding: 20px 0;
  & span > a {
    color: #4990e2;
  }
`;
