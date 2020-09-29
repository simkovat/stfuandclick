import { useDispatch, useSelector } from 'react-redux';

import { BigClickButton } from '../components/BigClickButton';
import { FC } from 'react';
import { Layout } from '../components/Layout';
import { MainBox } from '../components/MainBox';
import React from 'react';
import { ScoreBoard } from '../components/Board/ScoreBoard';
import { SessionStats } from '../components/SessionStats';
import { postClick } from '../store/sessionSlice';
import { sessionSelector } from '../store/selectors/sessionSelector';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export const ClickPage: FC = () => {
  const dispatch = useDispatch();

  const { team } = useParams<{ team: string }>();
  const {
    pending,
    data: { token, yourClicks, teamClicks },
  } = useSelector(sessionSelector);

  const handleClick = () => {
    dispatch(postClick(team, token));
  };

  const teamLink = window.location.href;

  return (
    <Layout>
      <Caption>
        Clicking for team <span>{team}</span>
      </Caption>
      <Invitation>
        Too lazy to click? Let your pals click for you:
        <LinkBox>{teamLink}</LinkBox>
      </Invitation>
      <MainBox>
        <BigClickButton onClick={handleClick} isPending={pending} />
        <SessionStats yourClicks={yourClicks} teamClicks={teamClicks} />
        <ScoreBoard />
      </MainBox>
    </Layout>
  );
};

const Caption = styled.div`
  font-size: 2em;
  margin-bottom: 30px;

  > span {
    font-weight: bold;
  }
`;

const Invitation = styled.div`
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LinkBox = styled.div`
  border: solid 1px grey;
  padding: 5px 8px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-left: 5px;
`;
