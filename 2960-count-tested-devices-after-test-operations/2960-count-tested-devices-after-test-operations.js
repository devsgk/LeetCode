/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
  let count = 0;
  
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      count++;
      
      for (let j = i; j < batteryPercentages.length; j++) {
        batteryPercentages[j]--;
      }
    }
  }
  
  return count;
};
