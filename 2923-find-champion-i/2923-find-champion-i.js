/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  let numOfTeams = grid.length;
  let firstTeamIndex = 0;
  let secondTeamIndex = 1;
  let count = 0;

  while (firstTeamIndex < numOfTeams && secondTeamIndex < numOfTeams) {
    if (grid[firstTeamIndex][secondTeamIndex] === 1) secondTeamIndex++;
    else {
      firstTeamIndex = secondTeamIndex;
      secondTeamIndex++;
    }
  }

  return firstTeamIndex;
};
