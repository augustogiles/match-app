import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Weeks  from './Weeks/Weeks' 
import Team from './Team/Team' 
import Table from './Table/Table' 

const Header = () => (
  <div className="header">
    <ul className="unstyled">
      <li>
        <Link to="/table">table</Link>
      </li>
      <li>
        <Link to="/weeks/1">weeks</Link>
      </li>
    </ul>
  </div>
);

const Main = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/weeks/:index" component={Weeks} />
        <Route path="/teams/:index" component={Team} />
        <Route path="/table" component={Table} />
        <Redirect from="/" to="/weeks/1" />
      </Switch>
    </div>
  </HashRouter>
);

const mountNode = document.querySelector("#root");
ReactDOM.render(<Main />, mountNode);
