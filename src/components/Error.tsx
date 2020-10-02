import React, { FC } from 'react';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const Error: FC = () => {
  const { t } = useTranslation();
  return <Wrapper>{t('errorGeneral')}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-style: italic;
  font-weight: lighter;
  background-color: transparent;
  padding: 30px;
  color: ${({ theme }) => theme.colors.error};
`;
