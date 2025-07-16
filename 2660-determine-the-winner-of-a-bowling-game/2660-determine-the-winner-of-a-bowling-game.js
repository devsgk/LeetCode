/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < player1.length; i++) {
    let hasBonus = false;
    let curScore = player1[i];

    if (i >= 1 && (player1[i - 2] === 10 || player1[i - 1] === 10)) {
      hasBonus = true;
    }

    if (hasBonus) curScore *= 2;
    
    sum1 += curScore;
  }

  for (let i = 0; i < player2.length; i++) {
    let hasBonus = false;
    let curScore = player2[i];

    if (i >= 1 && (player2[i - 2] === 10 || player2[i - 1] === 10)) {
      hasBonus = true;
    }

    if (hasBonus) curScore *= 2;

    sum2 += curScore;
  }

  if (sum1 > sum2) return 1
  else if (sum1 < sum2) return 2
  return 0
};
