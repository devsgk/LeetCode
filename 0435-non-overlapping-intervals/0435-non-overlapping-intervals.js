/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let left = sortedIntervals[0][0];
  let right = sortedIntervals[0][1];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const [curLeft, curRight] = sortedIntervals[i];
    
    if (curLeft < right) {
      count++;
    } else {
      right = curRight;
    }
  }
  
  return count;
};
