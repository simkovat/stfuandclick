import { FC, useEffect, useRef } from 'react';
import { Name, Rank, Row, TeamData, Wrapper } from './boardStyles';

import { BoardHeaders } from './BoardHeaders';
import { Error } from '../Error';
import { Loading } from '../Loading';
import { NoData } from '../NoData';
import React from 'react';
import { RootStateT } from '../../store/rootReducer';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ScoreBoard: FC = () => {
  const { data, pending, error } = useSelector(
    (state: RootStateT) => state.leaderboard
  );
  const { team: teamName } = useParams<{ team: string }>();

  const scrollToRef = (element: HTMLLIElement) =>
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

  useEffect(() => {
    myRef.current && scrollToRef(myRef.current);
  }, [data]);

  const myRef = useRef<HTMLLIElement>(null);

  if (pending) return <Loading />;
  if (error) return <Error />;
  if (data?.length === 0) return <NoData />;

  return (
    <Wrapper>
      <BoardHeaders />
      <TableWrapper>
        {data?.map((team) => {
          if (team.team === teamName) {
            return (
              <HighlightedRow key={team.team} ref={myRef}>
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

export const TableWrapper = styled.ul`
  overflow: scroll;
  height: 276px;
`;

const HighlightedRow = styled.li`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 10px 0 15px;
  display: flex;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.white};
`;
