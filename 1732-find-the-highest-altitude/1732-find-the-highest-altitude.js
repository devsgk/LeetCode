/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  const arr = [0];
  
  for (let i = 0; i < gain.length; i++) {
    arr.push(gain[i] + arr.at(-1));
  }

  return Math.max(...arr)
};