import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Table from './Table/Table';
import Weeks  from './Weeks/Weeks';
import Team from './Team/Team';

export const Routes = () => (
  <HashRouter>
      <Switch>
        <Route path="/weeks/:index" component={Weeks} />
        <Route path="/teams/:index" component={Team} />
        <Route path="/table" component={Table} />
        <Redirect from="/" to="/weeks/1" />
      </Switch>
  </HashRouter>
);