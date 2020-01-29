import React, {Component} from 'react';
import { Results } from '../Results/Results' 

import { fetch } from '../services/api' 
import { computeTeamStats } from '../utils'

export default class Team extends Component {
  state = {
    data: null,
    stats: {},
  };

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
          });
        }
      );
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
};