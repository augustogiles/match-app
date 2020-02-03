import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const ResultsContainerStyled = styled.div `
  margin: 20px auto;
  padding: 40px 20px;
  
  width: 80%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  overflow: auto;

`;

const ResultStyled = styled.div `

  padding: 20px 16px;
  color: rgba(0,0,0,.87);

  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.20);

  transition-property: box-shadow margin-top filter;
  transition-duration: .2s;

  &:hover {
    background-color: #dddddd;
    margin-top: 5px;
    margin-bottom: 0px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.20);
  }
`;

const ImgResultStyled = styled.img `
  width: 24px;
  height: 24px;
  margin: 12px;
`;

const TeamResultStyled = styled(Link)`
  position: relative;
  bottom: 20px;

  transition-property: color filter;
  transition-duration: .2s;
  &:hover {
    color: grey;
  }
`;

const TeamScoreStyled = styled.div `
  
  float: right;
  top: 12px;
  position: relative;
  
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

  function getImgUri(id){
    return `http://acor.sl.pt:7777/logos/${id}.png`;
  }

  if (score[0] !== score[1]){
    [homeTeam, visitorTeam] = boldWinner();    
  }

  return (
    <ResultStyled className="result">
      <div>
        <ImgResultStyled src={getImgUri(teamIds[0])}/>
        <TeamResultStyled to={`/teams/${teamIds[0]}`}>{homeTeam}</TeamResultStyled>
        <TeamScoreStyled> {score[0]} </TeamScoreStyled>
      </div>
      <div>
        <ImgResultStyled src={getImgUri(teamIds[1])}/>
        <TeamResultStyled to={`/teams/${teamIds[1]}`}>{visitorTeam}</TeamResultStyled> 
        <TeamScoreStyled> {score[1]} </TeamScoreStyled>
      </div>
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
