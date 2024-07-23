/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const obj = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  
  for (let i = 0; i < moves.length; i++) {
    const cur = moves[i];
    
    obj[cur]++;
  }
  
  if (obj["L"] === obj["R"] && obj["U"] === obj["D"]) {
    return true;
  }
  
  return false;
};