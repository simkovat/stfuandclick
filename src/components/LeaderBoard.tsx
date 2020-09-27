import { FC } from 'react';
import React from 'react';
import { RootStateT } from '../store/rootReducer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const LeaderBoard: FC = () => {
  const data = useSelector((state: RootStateT) => state.leaderboard);

  return (
    <Wrapper>
      <Headers>
        <span>TEAM</span>
        <span>CLICKS</span>
      </Headers>
      {/* {data &&
        data.map((team) => (
          <Row>
            <Rank>{team.order}</Rank>
            <TeamData>
              <span>{team.team}</span>
              <span>{team.clicks}</span>
            </TeamData>
          </Row>
        ))} */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  font-weight: normal;
`;

const Headers = styled.div`
  margin-left: 10%;
  padding: 5px 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 0.7em;
  font-weight: bold;
`;
const Row = styled.li`
  background-color: lightskyblue;
  padding: 0 10px 0 15px;
  display: flex;
  &:nth-child(even) {
    background-color: lightblue;
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
