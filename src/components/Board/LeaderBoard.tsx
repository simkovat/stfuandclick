import { Headers, Name, Rank, Row, TeamData, Wrapper } from './boardStyles';

import { Error } from '../Error';
import { FC } from 'react';
import { Loading } from '../Loading';
import { NoData } from '../NoData';
import React from 'react';
import { RootStateT } from '../../store/rootReducer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const LeaderBoard: FC = () => {
  const { data, pending, error } = useSelector(
    (state: RootStateT) => state.leaderboard
  );

  if (pending) return <Loading />;
  if (error) return <Error />;
  if (data?.length === 0) return <NoData />;

  return (
    <Wrapper>
      <Headers>
        <span>TEAM</span>
        <span>CLICKS</span>
      </Headers>
      <TableWrapper>
        {data?.slice(0, 10).map((team) => (
          <Row key={team.team}>
            <Rank>{team.order}</Rank>
            <TeamData>
              <Name>{team.team}</Name>
              <span>{team.clicks}</span>
            </TeamData>
          </Row>
        ))}
      </TableWrapper>
    </Wrapper>
  );
};

export const TableWrapper = styled.ul`
  overflow: scroll;
`;
