import { FC } from 'react';
import { Layout } from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export const TeamPage: FC = () => {
  const { team } = useParams<{ team: string }>();
  return (
    <Layout>
      <Caption>
        Clicking for team <span>{team}</span>
      </Caption>
      <Invitation>
        Too lazy to click? Let your pals click for you:
        <LinkBox>{window.location.href}</LinkBox>
      </Invitation>
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
