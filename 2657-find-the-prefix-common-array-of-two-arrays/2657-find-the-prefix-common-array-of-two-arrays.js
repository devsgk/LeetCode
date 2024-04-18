/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const length = A.length;
  let count = 0;
  const result = [];
  
  while (count < length) {
    const newA = A.slice(0, count + 1);
    const newB = B.slice(0, count + 1);
    const common = newA.filter(el => newB.includes(el));
    const commonLength = common.length;
  
    result.push(commonLength);
    count++;
  }
  
  return result;
};