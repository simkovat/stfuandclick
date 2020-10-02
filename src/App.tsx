import React, { FC } from 'react';

import { GlobalStyle } from './styles/globalStyles';
import { Router } from './router/Router';

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Router />
  </>
);
