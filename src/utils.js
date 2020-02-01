import { chain, orderBy } from 'lodash';
import {teamsMock, weeksMock} from './Data/mockData'

const AWARDS = {
  "wins": 3,
  "draws": 1,
  "losses": 0,
}

function getTeam(teamId, result) {
  let team;
  if(teamId === result.teamIds[0]){
    team = [0, result.teams[0]];
  }else if(teamId === result.teamIds[1]){
    team = [1, result.teams[1]];
  }

  return team;
}

function getTeamWinnerIndex(result) {
  let teamWinner;
  if(!!result){
    let { score } = result;
    if(score[0] === score[1]){
      teamWinner = -1;
    } else {
      teamWinner = score[0] > score[1] ? 0 : 1;
    }
  }

  return teamWinner;
}

function getGameStatus(teamIndex, result) {
  let teamWinnerIdx = getTeamWinnerIndex(result);
  let status = "draws";
  let gp = 0;
  let gc = 0;
  
  if(teamWinnerIdx !== undefined && teamWinnerIdx > 0) {
    gp = result.score[teamIndex];
    gc = result.score[+ !teamIndex];
    status = teamWinnerIdx === teamIndex ? "wins" : "losses";
  }

  return {status, gp, gc};
}

function teamStatReducer(teamId, results) {

  results = !!results ? results : [];
  const statsResume = results.reduce((stats, result) => {

    let [teamIndex, teamName] = getTeam(teamId, result);

    if(teamIndex !== undefined) {
      let {status, gp, gc} = getGameStatus(teamIndex, result);
      stats["gp"] += gp
      stats["gc"] += gc
      stats[status] += 1;
      stats["points"] += AWARDS[status];
      stats["name"] = teamName;
    }

    return stats;
  }, {"id": '', "name": "", "wins": 0, "draws": 0, "losses": 0, "gp": 0, "gc": 0, "gd": 0, "points": 0});

  statsResume["id"] = teamId;
  statsResume["gd"] = statsResume["gp"] - statsResume["gc"]

  return statsResume;
}

// TASK #3 - compute team stats
export function computeTeamStats(id, results) {  
  return teamStatReducer(parseInt(id, 10), results);
}

function groupMatchesByTeam(teams, weeksMatches) {
  const allMatchesByTeam = teams.map(teamName => {
    let teamMatches = chain(weeksMatches)
                      .flatten()
                      .filter(match => match.teams.includes(teamName))
                      .value();

    return [teamName, teamMatches];
  });

  return allMatchesByTeam;
}

// TASK #4 - create a table of results
export function computeTable(teams, weeksMatches) {

  teams = !!teams ? teams : teamsMock ;
  weeksMatches = !!weeksMatches ? weeksMatches : weeksMock ;

  let allMatchesByTeam = groupMatchesByTeam(teams, weeksMatches);
  let allTeamStats = allMatchesByTeam.reduce( (map, [teamName, teamMatches], teamId) => {
    map[teamName] = teamStatReducer(teamId, teamMatches)
    return map;
  }, {})

  return orderBy(allTeamStats, ['points', 'gd', 'gc'], ['desc']);
}