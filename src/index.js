import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Link, Route, DefaultRoute, Switch, Redirect } from 'react-router-dom';
import superagent from 'superagent';
import { Results } from './Results/Results' 
import { fetch } from './services/api' 

const TableObject = objects => {
  return (
    <table className="team-stats">
      <tbody>
        {Object.entries(objects).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      stats: {},
    };
  }

  componentDidMount(){
    fetch("/teams/" + this.props.match.params.index).then(data => 
    {
        this.setState({
          data: data,
          stats: computeTeamStats(data.id, data.results)
        })
    });

  }

  componentWillReceiveProps(nextProps) {
    const oldIdData = this.state.data.id;
    const newIdData = parseInt(nextProps.match.params.index, 10);
    if (oldIdData !== newIdData) {
      fetch("/teams/" + newIdData).then(data => 
        {
          this.setState({
            data: data,
            stats: computeTeamStats(data.id, data.results)
          })
        });
    }
  }

  render() {
    const { data } = this.state;
    if (!data) return <div>loading...</div>;

    return (
      <div className="team">
        <h1>Team {data.name}</h1>

        <h2>Games</h2>
        <Results results={data.results} />
      </div>
    );
  }
}

class Weeks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      chosenWeek: this.getWeek() // TASK #2 - make matches start at 1 instead of 0
    };
  }

  getWeek() {
    let index = parseInt(this.props.match.params.index, 10)
    if (index > 0) {
      index -= 1;
    }
    return index
  }

  componentDidMount(){
    fetch("/weeks").then(data => this.setState({ data: data }));
  }

  componentWillReceiveProps(nextProps) {
    const a = this.state.data.id;
    const b = parseInt(nextProps.match.params.index);
    if (a !== b) {
      this.setState({ chosenWeek: b });
    }
  }

  render() {
    let { data } = this.state;
    if (!data.length) return <div>loading...</div>;

    return (
      <div className="weeks">
        <h1>Weeks</h1>
        <div className="week-chooser">
          <ul className="unstyled">
            {this.state.data.map((week, weekNumber) => (
              <li key={weekNumber}>
                <Link to={`/weeks/${weekNumber}`}>{weekNumber}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h2>Results for week #{this.state.chosenWeek}</h2>
        <Results results={this.state.data[this.state.chosenWeek]} />
      </div>
    );
  }
}

// TASK #3 - compute team stats
function computeTeamStats(id, results) {
  return {};
}

// TASK #4 - create a table of results
function computeTable(teams, weeksMatches) {
  return [];
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  componentDidMount(){
    Promise.all([
      fetch("/teams"),
      fetch("/weeks")
    ]).then((teams, weeksMatches) => {
      this.setState({
        table: computeTable(teams, weeksMatches)
      });
    });
  }

  render() {
    const t = this.state.table;
    if (!t) return <div>loading...</div>;

    return "TODO 4";
  }
}

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
