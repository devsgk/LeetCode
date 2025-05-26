/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    let boxSet = new Set();

    for (let j = 0; j < 9; j++) {
      let row = board[i][j];
      let col = board[j][i];
      let box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3)+(j % 3)];

      if (row !== ".") {
        if (rowSet.has(row)) return false;

        rowSet.add(row);
      }

      if (col !== ".") {
        if (colSet.has(col)) return false;

        colSet.add(col);
      }

      if (box !== ".") {
        if (boxSet.has(box)) return false;

        boxSet.add(box);
      }
    }
  }
  
  return true;
};
