/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const result = [];
  const max = Math.max(...candies);
  
  candies.forEach(el => {
    if (el + extraCandies >= max) {
      result.push(true)
    } else {
      result.push(false)
    }
  })
  
  return result;
};