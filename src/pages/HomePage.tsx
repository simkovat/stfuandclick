import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from '../components/Error';
import { Layout } from '../components/Layout';
import { LeaderBoard } from '../components/Board/LeaderBoard';
import { MainBox } from '../components/MainBox';
import { Quote } from '../components/Quote';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { RibbonHeader } from '../components/RibbonHeader';
import { TeamForm } from '../components/TeamForm';
import { fetchLeaderboard } from '../store/leaderboardSlice';
import { recordClickSelector } from '../store/selectors/recordClickSelector';

export const HomePage: FC = () => {
  const dispatch = useDispatch();

  const { success: teamSubmissionSuccess, error } = useSelector(
    recordClickSelector
  );
  const [team, setTeam] = useState<string>();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  //TODO is this the right approach?
  if (teamSubmissionSuccess) {
    return <Redirect to={`/${team}`} />;
  }

  return (
    <Layout>
      <Quote
        text={"It's really simple, you just need to click as fast as you can."}
        author={'anonymous'}
      />
      {error && <Error />}
      <MainBox>
        <TeamForm setTeam={setTeam} />
        <RibbonHeader title={'TOP 10 Clickers'} />
        <LeaderBoard />
      </MainBox>
    </Layout>
  );
};
