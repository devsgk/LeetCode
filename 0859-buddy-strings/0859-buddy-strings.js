/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  
  const arr = [];
  
  for (let i = 0; i < s.length; i++) {
    const first = s[i];
    const second = goal[i];
    
    if (first !== second) {
      arr.push(i);
    }
  }

  if (arr.length === 2) {
    const [a, b] = arr;
    
    if (s[a] === goal[b] && s[b] === goal[a]) {
      return true;
    }
  } else if (arr.length === 0) {
    const sArr = s.split("");
    const set = new Set(sArr);

    if (set.size < s.length) {

      return true;
    }
  }
  
  return false;
};