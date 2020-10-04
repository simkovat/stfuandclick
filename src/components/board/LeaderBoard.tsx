import { Name, Rank, Row, TeamData, Wrapper } from './boardStyles';

import { BoardHeaders } from './BoardHeaders';
import { DataWrapper } from '../layout/DataWrapper';
import { FC } from 'react';
import React from 'react';
import { leaderboardSelector } from '../../store/selectors/leaderboardSelector';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const LeaderBoard: FC = () => {
  const { data, pending, error } = useSelector(leaderboardSelector);

  return (
    <DataWrapper pending={pending} error={error} data={data}>
      <Wrapper>
        <BoardHeaders />
        <TableWrapper>
          {data
            ? data.slice(0, 10).map((team) => (
                <Row key={team.team}>
                  <Rank>{team.order}</Rank>
                  <TeamData>
                    <Name>{team.team}</Name>
                    <span>{team.clicks}</span>
                  </TeamData>
                </Row>
              ))
            : null}
        </TableWrapper>
      </Wrapper>
    </DataWrapper>
  );
};

export const TableWrapper = styled.ul`
  overflow: scroll;
`;
