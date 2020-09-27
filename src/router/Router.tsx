import { Route, Switch } from 'react-router-dom';

import { FC } from 'react';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import React from 'react';
import { TeamPage } from '../pages/TeamPage';
import { routes } from './routes';

export const Router: FC = () => (
  <Switch>
    <Route path={routes.HOME_PAGE} exact component={HomePage} />
    <Route path={routes.TEAM_PAGE} exact component={TeamPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
