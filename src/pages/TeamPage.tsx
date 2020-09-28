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

export const TeamPage: FC = () => {
  const { team } = useParams<{ team: string }>();
  const dispatch = useDispatch();
  const session = useSelector(sessionSelector);

  //TODO pouzit useEffect aby se jeden api post poslal uz pri renderu?

  const handleClick = () => {
    dispatch(postClick(team, session.data.token));
  };
  return (
    <Layout>
      <Caption>
        Clicking for team <span>{team}</span>
      </Caption>
      <Invitation>
        Too lazy to click? Let your pals click for you:
        <LinkBox>{window.location.href}</LinkBox>
      </Invitation>
      <MainBox>
        <BigClickButton onClick={handleClick} />
        <SessionStats
          yourClicks={session.data.yourClicks}
          teamClicks={session.data.teamClicks}
        />
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
`;

const LinkBox = styled.div`
  border: solid 1px grey;
  padding: 5px 8px;
  width: fit-content;
  background-color: whitesmoke;
  border-radius: 5px;
  margin-left: 5px;
`;
