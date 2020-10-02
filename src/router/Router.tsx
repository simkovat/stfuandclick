import { Route, Switch } from 'react-router-dom';

import { ClickPage } from '../pages/ClickPage';
import { FC } from 'react';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import React from 'react';
import { routes } from './routes';

export const Router: FC = () => (
  <Switch>
    <Route path={routes.HOME_PAGE} exact component={HomePage} />
    <Route path={`${routes.CLICK_PAGE}/:team`} exact component={ClickPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
