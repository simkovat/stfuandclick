import { FC } from 'react';
import { LeaderBoard } from './LeaderBoard';
import React from 'react';
import { RibbonHeader } from './RibbonHeader';
import { TeamForm } from './TeamForm';
import styled from 'styled-components';

export const MainBox: FC = () => {
  return (
    <Wrapper>
      <TeamForm />
      <RibbonHeader title={'TOP 10 Clickers'} />
      <LeaderBoard />
      <Footer>Want to be top? STFU and click!</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid 3px #4990e2;
  border-radius: 10px;
  width: 60%;
  max-width: 500px;
  height: 600px;
  margin: 35px 0;
  padding: 10px 0 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
`;
const Footer = styled.span`
  font-style: italic;
  align-self: flex-end;
`;
