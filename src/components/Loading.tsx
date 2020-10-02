import React, { FC } from 'react';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const Loading: FC = () => {
  const { t } = useTranslation();
  return <Wrapper>{t('loading')}...</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-style: italic;
  font-weight: lighter;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 50px;
`;
