import { FC } from 'react';
import React from 'react';
import { mediaSmallTabletMax } from '../styles/constants';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const MainBox: FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {children}
      <Footer>{t('wantToBeTop')}</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid 3px ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  width: 60%;
  width: 550px;
  height: 675px;
  margin-bottom: 35px;
  padding: 10px 0 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  ${mediaSmallTabletMax} {
    width: 100%;
  }
`;
const Footer = styled.span`
  font-style: italic;
  margin-top: 15px;
  position: absolute;
  bottom: 30px;
`;
