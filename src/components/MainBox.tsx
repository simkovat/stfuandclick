import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';

export const MainBox: FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Footer>Want to be top? STFU and click!</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid 3px #4990e2;
  border-radius: 10px;
  width: 60%;
  max-width: 550px;
  max-height: 675px;
  margin: 35px 0;
  padding: 10px 0 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;
const Footer = styled.span`
  font-style: italic;
  margin: 15px 0;
`;
