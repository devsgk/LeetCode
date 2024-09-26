/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
  let n = batteryPercentages.length;
  let res = 0;
    
  for (let i = 0; i < n; i++) {
    if (batteryPercentages[i] > 0) {
      res++;
      for (let j = i + 1; j < n; j++) batteryPercentages[j]--;
    }
  }

  return res;
}
