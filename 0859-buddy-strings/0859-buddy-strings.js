/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  const freq1 = {};
  const freq2 = {};

  if (s.length !== goal.length) return false;

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) count++;
  }

  if (count > 2) return false;

  for (const letter of s) {
    freq1[letter] = freq1[letter] ? freq1[letter] + 1 : 1;
  }

  for (const letter of goal) {
    freq2[letter] = freq2[letter] ? freq2[letter] + 1 : 1;
  }

  if (s === goal) {
    if (Object.values(freq1).some(value => value >= 2)) return true;
    else return false;
  }

  for (const [key, value] of Object.entries(freq1)) {
    console.log(key, value)
    console.log(freq2[key])
    if (value === freq2[key]) continue;
    else return false;
  }

  return true;
};
