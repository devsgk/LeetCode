/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const board2 = [];
  const board3 = Array.from({ length: 9 }, () => []);

  function check(board) {
    let condition = true;

    for (const arr of board) {
      const set = new Set();

      for (let j = 0; j < arr.length; j++) {
        const num = arr[j];

        if (num !== ".") set.add(num);
      }

      const length = arr.filter(el => el !== ".").length;

      if (set.size !== length) {
        condition = false;

        return condition;
      }
    }

    return condition;
  }

  

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      board3[boxIndex].push(board[i][j]);
    }
  }

  for (let i = 0; i < 9; i++) {
    const col = [];

    for (let j = 0; j < 9; j++) {
      col.push(board[j][i])
    }

    board2.push(col);
  }
  
  return check(board) && check(board2) && check(board3);
};
