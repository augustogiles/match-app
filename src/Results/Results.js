import React from 'react';

import { ResultsContainerStyled, ResultStyled, ImgResultStyled, TeamResultStyled, TeamScoreStyled} from './Results.styled'

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
