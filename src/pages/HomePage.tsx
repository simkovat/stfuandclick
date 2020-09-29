import { FC, useState } from 'react';

import { Layout } from '../components/Layout';
import { LeaderBoard } from '../components/Board/LeaderBoard';
import { MainBox } from '../components/MainBox';
import { Quote } from '../components/Quote';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { RibbonHeader } from '../components/RibbonHeader';
import { TeamForm } from '../components/TeamForm';
import { sessionSelector } from '../store/selectors/sessionSelector';
import { useSelector } from 'react-redux';

export const HomePage: FC = () => {
  const { success: teamSubmissionSuccess } = useSelector(sessionSelector);
  const [team, setTeam] = useState<string>();

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
      <MainBox>
        <TeamForm setTeam={setTeam} />
        <RibbonHeader title={'TOP 10 Clickers'} />
        <LeaderBoard />
      </MainBox>
    </Layout>
  );
};
