/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const pair = [];
  
  for (let i = 0; i < difficulty.length; i++) {
    const arr = [difficulty[i], profit[i]];
    
    pair.push(arr);
  }
  
  console.log(pair);
  pair.sort((a, b) => b[1] - a[1]);
  
  console.log(pair);
  
  let result = 0;
  
  for (let i = 0; i < worker.length; i++) {
    for (let j = 0; j < pair.length; j++) {
      if (worker[i] < pair[j][0]) {
        continue;
      }
      
      if (worker[i] >= pair[j][0]) {
        result += pair[j][1];
        
        break;
      }
    }
  }
  
  return result;
};