import React, { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import styled from 'styled-components';

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

const Content = styled.div`
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
`;
