/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  const result = [];
  let nextValue = 0;
  
  for (let i = 0; i < pref.length; i++) {
    nextValue = i === 0 ? pref[i] : pref[i] ^ pref[i - 1];
    result.push(nextValue);
  }

  return result;
};