/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
  const odd = ["a", "c", "e", "g"];
  const even = ["b", "d", "f", "h"];
  const char1 = coordinate1[0];
  const char2 = coordinate2[0];
  const num1 = coordinate1[1];
  const num2 = coordinate2[1];
  const char1Condition = odd.includes(char1) && odd.includes(char2);
  const char2Condition = even.includes(char1) && even.includes(char2);
  
  if (char1Condition || char2Condition) {
    return num1 % 2 === num2 % 2;
  } else {
    return num1 % 2 !== num2 % 2;
  }
};
