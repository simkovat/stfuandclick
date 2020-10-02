import React, { FC } from 'react';

import { Trans } from 'react-i18next';
import styled from 'styled-components';

export const Footer: FC = () => (
  <Wrapper>
    <span>
      <Trans i18nKey='footerText'>
        If you don't like this page, it's
        <a href='https://www.applifting.cz/'> Applifting</a>'s fault.
      </Trans>
    </span>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-style: italic;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px 10px;
  & a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
