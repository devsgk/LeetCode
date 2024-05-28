/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
  const numCPUs = tasks.length / 4;
  const sortedProcessorTime = processorTime.sort((a, b) => a - b);
  const sortedTasks = tasks.sort((a, b) => b - a);
  let result = 0;
  
  for (let i = 0; i < processorTime.length; i++) {
    const max = Math.max(...sortedTasks.slice(i * 4, i * 4 + 4));
    result = Math.max(result, processorTime[i] + max);
  }
  
  return result;
};