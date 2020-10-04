import { FC, useEffect } from 'react';

import { LeaderBoard } from '../components/board/LeaderBoard';
import { MainBox } from '../components/MainBox';
import { Quote } from '../components/Quote';
import React from 'react';
import { RibbonHeader } from '../components/RibbonHeader';
import { TeamForm } from '../components/form/TeamForm';
import { fetchLeaderboard } from '../store/slices/leaderboardSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const HomePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  return (
    <>
      <Quote text={t('quote')} author={t('quoteAuthor')} />
      <MainBox>
        <TeamForm />
        <RibbonHeader title={t('top10Clickers')} />
        <LeaderBoard />
      </MainBox>
    </>
  );
};
