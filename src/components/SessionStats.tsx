import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Wrapper>
      <StatsItem title={t('yourClicks')} count={yourClicks} />
      <StatsItem title={t('teamClicks')} count={teamClicks} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 50px;
`;
const StatsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const Title = styled.span`
  font-style: italic;
  margin-bottom: 5px;
`;
const Count = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2em;
  font-weight: bold;
`;
