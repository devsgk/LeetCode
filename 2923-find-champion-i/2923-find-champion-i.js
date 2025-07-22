/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  let numOfTeams = grid.length;
  let championIndex = 0;
  let loserIndex = 1;

  while (championIndex < numOfTeams && loserIndex < numOfTeams) {
    if (grid[championIndex][loserIndex] === 1) {
      loserIndex++;
    } else {
      championIndex = loserIndex;
      loserIndex++;
    }
  }

  return championIndex;
};
