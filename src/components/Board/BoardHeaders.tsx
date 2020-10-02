import React, { FC } from 'react';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const BoardHeaders: FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <span>{t('team')}</span>
      <span>{t('click_plural')}</span>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  margin-left: 10%;
  padding: 5px 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.7em;
  text-transform: uppercase;
`;
