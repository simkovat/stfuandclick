import { Route, Switch } from 'react-router-dom';

import { FC } from 'react';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import React from 'react';
import { TeamPage } from '../pages/TeamPage';

export const Router: FC = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/:team' exact component={TeamPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
