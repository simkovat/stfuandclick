import React, { FC } from 'react';

import { GlobalStyle } from './globalStyles';
import { Router } from './router/Router';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
