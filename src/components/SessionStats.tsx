import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';

export const StatsItem: FC<{ title: string; count: number }> = ({
  title,
  count,
}) => (
  <StatsItemWrapper>
    <Title>{title}</Title>
    <Count>{count.toLocaleString()}</Count>
  </StatsItemWrapper>
);

interface Props {
  yourClicks: number;
  teamClicks: number;
}
export const SessionStats: FC<Props> = ({ yourClicks, teamClicks }) => {
  return (
    <Wrapper>
      <StatsItem title={'Your clicks:'} count={yourClicks} />
      <StatsItem title={'Team clicks:'} count={teamClicks} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 40px;
`;
const StatsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const Title = styled.span`
  font-style: italic;
  font-weight: normal;
  margin-bottom: 5px;
`;
const Count = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2em;
  font-weight: bold;
`;
