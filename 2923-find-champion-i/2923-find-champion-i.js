/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  let winnerIndex = 0;
  const numOfTeams = grid.length;

  for (let loserIndex = 0; loserIndex < numOfTeams; loserIndex++) {
    if (winnerIndex === loserIndex) continue;
    if (grid[winnerIndex][loserIndex] === 0) {
      winnerIndex = loserIndex;
    }
  }

  return winnerIndex;
};
