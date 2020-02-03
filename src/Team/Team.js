import React, {Component} from 'react';
import { Results } from '../Results/Results' 

import { fetch } from '../services/api' 
import { computeTeamStats } from '../utils'

import styled from 'styled-components'

const TeamStyled = styled.div `
  width: 100%;

  background-color: white;
  margin: 92px auto 50px auto;

  overflow: auto;

  h1 {
    text-align: center;
    font-weight: 200;
    color: rgba(0,0,0,.54);
    margin: 12px 0px;
    padding-top: 12px;
  }

  h2 {
    text-align: center;
    font-weight: 200;
    color: rgba(0,0,0,.54);
  }

  .results-container{
    height: 1000px;
    max-height: calc(100% + 200px); 

    overflow: auto;
  }
`;

const TeamLogoStyled = styled.img `
  margin: auto;
  display: block;
`;

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
      console.log("alo", err)
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
        <Results results={data.results} className="team-results" />
      </TeamStyled>
    );
  }
};