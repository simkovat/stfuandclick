import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from './Error';
import { Loading } from './Loading';
import { NoData } from './NoData';
import React from 'react';
import { RootStateT } from '../store/rootReducer';
import { fetchLeaderboard } from '../store/leaderboardSlice';
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
              <span>{team.team}</span>
              <span>{team.clicks}</span>
            </TeamData>
          </Row>
        ))}
      </TableWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  font-weight: normal;
`;
const TableWrapper = styled.ul``;

const Headers = styled.div`
  margin-left: 10%;
  padding: 5px 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.7em;
  font-weight: bold;
`;
const Row = styled.li`
  background-color: ${({ theme }) => theme.colors.tableRowDark};
  padding: 0 10px 0 15px;
  display: flex;
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableRowLight};
  }
`;
const Rank = styled.div`
  padding: 10px;
  width: 10%;
`;
const TeamData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
`;
