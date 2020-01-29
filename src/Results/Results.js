import React from 'react';
import { Link } from 'react-router-dom';


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

  return <p><Link to={`/teams/${teamIds[0]}`}>{homeTeam}</Link> {score[0]} vs {score[1]} <Link to={`/teams/${teamIds[1]}`}>{visitorTeam}</Link> </p>

};

export const Results = ({ results }) => {
    return (
      <div className="results">
        {results.map((result) => {
          return <Result key={`${result.teams[0]}_${result.teams[1]}`} {...result} />;
        })}
      </div>
    );
}
