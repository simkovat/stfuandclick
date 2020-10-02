import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from '../components/Error';
import { Layout } from '../components/layout/Layout';
import { LeaderBoard } from '../components/board/LeaderBoard';
import { MainBox } from '../components/MainBox';
import { Quote } from '../components/Quote';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { RibbonHeader } from '../components/RibbonHeader';
import { TeamForm } from '../components/form/TeamForm';
import { fetchLeaderboard } from '../store/slices/leaderboardSlice';
import { recordClickSelector } from '../store/selectors/recordClickSelector';
import { routes } from '../router/routes';
import { useTranslation } from 'react-i18next';

export const HomePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { success: teamSubmissionSuccess, error } = useSelector(
    recordClickSelector
  );
  const [team, setTeam] = useState<string>();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  if (teamSubmissionSuccess) {
    return <Redirect to={`${routes.CLICK_PAGE}/${team}`} />;
  }

  return (
    <Layout>
      <Quote text={t('quote')} author={t('quoteAuthor')} />
      {error && <Error />}
      <MainBox>
        <TeamForm setTeam={setTeam} />
        <RibbonHeader title={t('top10Clickers')} />
        <LeaderBoard />
      </MainBox>
    </Layout>
  );
};
