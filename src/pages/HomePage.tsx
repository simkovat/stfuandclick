import { FC } from 'react';
import { Layout } from '../components/Layout';
import { Quote } from '../components/Quote';
import React from 'react';

export const HomePage: FC = () => (
  <Layout>
    <Quote
      text={"It's really simple, you just need to click as fast as you can."}
      author={'anonymous'}
    />
  </Layout>
);
