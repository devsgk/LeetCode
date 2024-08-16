/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  const indices = [];
  
  for (let i = 0; i < endTime.length; i++) {
    if (endTime[i] >= queryTime) {
      indices.push(i);
    }
  }
  
  let count = 0;
  
  for (const index of indices) {
    if (startTime[index] <= queryTime) {
      count++;
    }
  }
  
  return count;
};