import { FC } from 'react';
import { Layout } from '../components/Layout';
import { LeaderBoard } from '../components/Board/LeaderBoard';
import { MainBox } from '../components/MainBox';
import { Quote } from '../components/Quote';
import React from 'react';
import { RibbonHeader } from '../components/RibbonHeader';
import { TeamForm } from '../components/TeamForm';

export const HomePage: FC = () => (
  <Layout>
    <Quote
      text={"It's really simple, you just need to click as fast as you can."}
      author={'anonymous'}
    />
    <MainBox>
      <TeamForm />
      <RibbonHeader title={'TOP 10 Clickers'} />
      <LeaderBoard />
    </MainBox>
  </Layout>
);
