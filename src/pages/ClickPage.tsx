import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BigClickButton } from '../components/buttons/BigClickButton';
import { CopyToClipboardButton } from '../components/buttons/CopyToClipboardButton';
import { Error } from '../components/Error';
import { MainBox } from '../components/MainBox';
import React from 'react';
import { ScoreBoard } from '../components/board/ScoreBoard';
import { SessionStats } from '../components/SessionStats';
import { fetchLeaderboard } from '../store/slices/leaderboardSlice';
import { mediaSmallTabletMax } from '../styles/constants';
import { postClick } from '../store/slices/recordClickSlice';
import { recordClickSelector } from '../store/selectors/recordClickSelector';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ClickPage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { team } = useParams<{ team: string }>();

  const {
    pending: recordClickPending,
    error,
    data: { token, yourClicks, teamClicks },
  } = useSelector(recordClickSelector);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(postClick(team, token));
  };

  const teamLink = window.location.href;

  return (
    <>
      <Caption>
        {t('clickingForTeam')} <span>{team}</span>
      </Caption>
      <Invitation>
        {t('tooLazyToClick')}
        <LinkBox>{teamLink}</LinkBox>
        <CopyToClipboardButton stringToCopy={teamLink} />
      </Invitation>
      {error && <Error />}

      <MainBox>
        <BigClickButton onClick={handleClick} isPending={recordClickPending} />
        <SessionStats yourClicks={yourClicks} teamClicks={teamClicks} />
        <ScoreBoard />
      </MainBox>
    </>
  );
};

const Caption = styled.div`
  font-size: 2em;
  margin-bottom: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
  letter-spacing: 0.5px;

  ${mediaSmallTabletMax} {
    max-width: 95%;
    font-size: 1.5em;
    white-space: break-spaces;
    text-align: center;
  }

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
  margin-bottom: 35px;
  letter-spacing: 0.3px;

  ${mediaSmallTabletMax} {
    max-width: 95%;
  }
`;

const LinkBox = styled.div`
  border: solid 1px grey;
  padding: 5px 8px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-left: 5px;
  overflow: scroll;

  ${mediaSmallTabletMax} {
    margin: 10px 0;
  }
`;
