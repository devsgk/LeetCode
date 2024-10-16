/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
  const charCode1 = coordinate1[0].charCodeAt(0) - 97;
  const charCode2 = coordinate2[0].charCodeAt(0) - 97;
  const row1 = coordinate1[1];
  const row2 = coordinate2[1];
  
  return (Number(charCode1) + Number(row1)) % 2 === (Number(charCode2) + Number(row2)) % 2;
};
