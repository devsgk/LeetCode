/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let count = 0;

  for (const log of logs) {
    if (log === "../" && count > 0) count--;
    if (!log.startsWith(".") && !log.startsWith("..")) count++;
  }


  return count;
};
