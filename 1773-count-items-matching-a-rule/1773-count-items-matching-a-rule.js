/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const filtered = items.filter(item => {
    if (ruleKey === "type") {
      return item[0] === ruleValue;
    } else if (ruleKey === "color") {
      return item[1] === ruleValue;
    } else {
      return item[2] === ruleValue;
    }
  });
  
  return filtered.length;
};