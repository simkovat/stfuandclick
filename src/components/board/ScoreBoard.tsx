import { FC, useEffect, useRef } from 'react';
import { Name, Rank, Row, TeamData, Wrapper } from './boardStyles';

import { BoardHeaders } from './BoardHeaders';
import { DataWrapper } from '../layout/DataWrapper';
import React from 'react';
import { leaderboardSelector } from '../../store/selectors/leaderboardSelector';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ScoreBoard: FC = () => {
  const { data, pending, error } = useSelector(leaderboardSelector);
  const { team: teamName } = useParams<{ team: string }>();

  const scrollToRef = (element: HTMLLIElement) =>
    element.scrollIntoView({ block: 'center' });

  useEffect(() => {
    myRef.current && scrollToRef(myRef.current);
  }, [data]);

  const myRef = useRef<HTMLLIElement>(null);

  return (
    <DataWrapper pending={pending} error={error} data={data}>
      <Wrapper>
        <BoardHeaders />
        <TableWrapper>
          {data
            ? data.map((team) =>
                team.team === teamName ? (
                  <HighlightedRow key={team.team} ref={myRef}>
                    <Rank>{team.order}</Rank>
                    <TeamData>
                      <Name>{team.team}</Name>
                      <span>{team.clicks}</span>
                    </TeamData>
                  </HighlightedRow>
                ) : (
                  <Row key={team.team}>
                    <Rank>{team.order}</Rank>
                    <TeamData>
                      <Name>{team.team}</Name>
                      <span>{team.clicks}</span>
                    </TeamData>
                  </Row>
                )
              )
            : null}
        </TableWrapper>
      </Wrapper>
    </DataWrapper>
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
