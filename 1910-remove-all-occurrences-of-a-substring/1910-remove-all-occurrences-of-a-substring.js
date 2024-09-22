/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
  let newS = s;

  while (!(newS === newS.replace(part, ""))) {
    newS = newS.replace(part, "");
  }
  
  return newS;
};
