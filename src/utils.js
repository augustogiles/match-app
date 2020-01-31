
const AWARDS = {
  "wins": 3,
  "draws": 1,
  "losses": 0,
}

function getTeamIndex(teamId, result) {
  let index;
  if(teamId === result.teamIds[0]){
    index = 0;
  }else if(teamId === result.teamIds[1]){
    index = 1;
  }

  return index;
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

    let teamIndex = getTeamIndex(teamId, result);

    if(teamIndex !== undefined) {
      let {status, gp, gc} = getGameStatus(teamIndex, result);
      stats["GP"] += gp
      stats["GC"] += gc
      stats[status] += 1;
      stats["points"] += AWARDS[status];
    }

    return stats;
  }, {"wins": 0, "draws": 0, "losses": 0, "GP": 0, "GC": 0, "GD": 0, "points": 0});

  statsResume["GD"] = statsResume["GP"] - statsResume["GC"]

  return statsResume;
}

// TASK #3 - compute team stats
export function computeTeamStats(id, results) {
  return teamStatReducer(parseInt(id, 10), results);
}


// TASK #4 - create a table of results
export function computeTable(teams, weeksMatches) {
  return [];
}