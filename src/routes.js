import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Table from './Table/Table';
import Weeks  from './Weeks/Weeks';
import Team from './Team/Team';

export const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/weeks/1" />
    <Route exact path="/weeks/:index" component={Weeks} />
    <Route exact path="/teams/:index" component={Team} />
    <Route exact path="/table" component={Table} />
  </Switch>
);