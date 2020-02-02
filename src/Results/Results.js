import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const ResultsContainerStyled = styled.div `
  margin: 20px auto;
  width: 80%;
`;

const ResultStyled = styled.div `

  text-align: center;
  padding: 20px 16px;
  margin: 20px 0px;
  color: rgba(0,0,0,.87);

  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.20);

  transition-property: box-shadow margin-top filter;
  -o-transition-duration: .1s;

  &:hover {
    background-color: #dddddd;
    margin-top: 0px;
    margin-bottom: 5px;
  }
`;

const TeamResultStyled = styled(Link)`
  position: relative;
  &:hover {
    color: grey;
  }
`;

const Result = props => {
  const { teams, teamIds, score } = props;
  let [homeTeam, visitorTeam] = teams;
  
  function boldWinner(){
    let response = score[0] > score[1] ? 
      [<b>{teams[0]}</b>, teams[1]] : 
      [teams[0], <b>{teams[1]}</b>]
    
    return response;
  }

  if (score[0] !== score[1]){
    [homeTeam, visitorTeam] = boldWinner();    
  }

  return (
    <ResultStyled className="result">
        <TeamResultStyled to={`/teams/${teamIds[0]}`}>{homeTeam}</TeamResultStyled> {score[0]} vs {score[1]} <TeamResultStyled to={`/teams/${teamIds[1]}`}>{visitorTeam}</TeamResultStyled> 
    </ResultStyled>
  );

};

export const Results = ({ results }) => {
    return (
      <ResultsContainerStyled className="container">
        {results.map((result) => {
          return <Result key={`${result.teams[0]}_${result.teams[1]}`} {...result} />;
        })}
      </ResultsContainerStyled>
    );
}
