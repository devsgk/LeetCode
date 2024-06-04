/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const arr1 = s1.split("").sort();
  const arr2 = s2.split("").sort();
  let canBreak = true;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= arr2[i]) {
      continue;
    } else {
      console.log(arr1[i], arr2[i])
      canBreak = false;
    }
  }
  
  if (canBreak) return true;
  
  canBreak = true;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] <= arr2[i]) {
      continue;
    } else {

      canBreak = false;
    }
  }
  
  return canBreak;
};