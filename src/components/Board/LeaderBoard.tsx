import { FC, useEffect } from 'react';
import { Headers, Name, Rank, Row, TeamData, Wrapper } from './boardStyles';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from '../Error';
import { Loading } from '../Loading';
import { NoData } from '../NoData';
import React from 'react';
import { RootStateT } from '../../store/rootReducer';
import { fetchLeaderboard } from '../../store/leaderboardSlice';
import styled from 'styled-components';

export const LeaderBoard: FC = () => {
  const { data, pending, error } = useSelector(
    (state: RootStateT) => state.leaderboard
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

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
