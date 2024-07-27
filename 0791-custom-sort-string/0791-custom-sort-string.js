/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  const orderArr = order.split("");
  const orderSet = new Set(order);
  const filtered = [];
  const remaining = [];
  
  for (const letter of s) {
    if (orderSet.has(letter)) {
      filtered.push(letter);
    } else {
      remaining.push(letter);
    }
  }
  
  filtered.sort((a, b) => orderArr.indexOf(a) - orderArr.indexOf(b));
  
  return filtered.concat(remaining).join("");
};