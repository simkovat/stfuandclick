import { FC, useEffect } from 'react';
import {
  Headers,
  Name,
  Rank,
  Row,
  TableWrapper,
  TeamData,
  Wrapper,
} from './boardStyles';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from '../Error';
import { Loading } from '../Loading';
import { NoData } from '../NoData';
import React from 'react';
import { RootStateT } from '../../store/rootReducer';
import { fetchLeaderboard } from '../../store/leaderboardSlice';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export const ScoreBoard: FC = () => {
  const { data, pending, error } = useSelector(
    (state: RootStateT) => state.leaderboard
  );
  const { team: teamName } = useParams<{ team: string }>();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  if (pending) return <Loading />;
  if (error) return <Error />;
  if (data?.length === 0) return <NoData />;

  const myTeamIndex = data?.findIndex((team) => team.team === teamName);
  const dataSliced = myTeamIndex
    ? data?.slice(myTeamIndex - 3, myTeamIndex + 4)
    : data;

  console.log({ data, myTeamIndex, dataSliced });

  return (
    <Wrapper>
      <Headers>
        <span>TEAM</span>
        <span>CLICKS</span>
      </Headers>
      <TableWrapper>
        {dataSliced?.map((team) => {
          if (team.team === teamName) {
            return (
              <HighlightedRow key={team.team}>
                <Rank>{team.order}</Rank>
                <TeamData>
                  <Name>{team.team}</Name>
                  <span>{team.clicks}</span>
                </TeamData>
              </HighlightedRow>
            );
          } else {
            return (
              <Row key={team.team}>
                <Rank>{team.order}</Rank>
                <TeamData>
                  <Name>{team.team}</Name>
                  <span>{team.clicks}</span>
                </TeamData>
              </Row>
            );
          }
        })}
      </TableWrapper>
    </Wrapper>
  );
};

const HighlightedRow = styled.li`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 10px 0 15px;
  display: flex;
  font-size: 1.5em;
  color: #fff;
`;
