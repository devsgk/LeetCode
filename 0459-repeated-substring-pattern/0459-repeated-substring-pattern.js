/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length === 1) return false;

  let sub = "";

  for (let i = 0; i < s.length / 2; i++) {
    sub += s[i];

    const arr = s.split(sub);

    if (arr.every(el => el === "")) return true;
  }

  return false;
};
