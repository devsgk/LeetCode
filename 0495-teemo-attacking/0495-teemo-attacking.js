/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let seconds = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    seconds += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
  }

  return seconds + duration;
};
