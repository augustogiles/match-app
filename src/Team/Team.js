import React, { Component } from 'react';
import { Results } from '../Results/Results' 

import { fetch } from '../services/api' 
import { computeTeamStats } from '../utils'

import { TeamStyled, TeamLogoStyled, TeamResultsContainerStyled } from './Team.styled'

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
    }, err => {
      this.setState({
        data: null,
        stats: computeTeamStats(null, null)
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
      <TeamStyled className="team">
        <h1>{data.name}</h1>
        <TeamLogoStyled src={data.logo}/>
        <h2>Games</h2>
        <TeamResultsContainerStyled>
          <Results results={data.results} className="team-results" />
        </TeamResultsContainerStyled>
      </TeamStyled>
    );
  }
};