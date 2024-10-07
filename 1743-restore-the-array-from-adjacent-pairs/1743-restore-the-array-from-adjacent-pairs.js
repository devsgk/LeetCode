/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
  const adj = new Map();
  
  for (const [a, b] of adjacentPairs) {
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    
    adj.get(a).push(b);
    adj.get(b).push(a);
  }
  
  let start;
  
  for (const [key, value] of adj) {
    if (value.length === 1) {
      start = key;
      break;
    }
  }
  
  const queue = [start];
  const answer = [];
  const visited = new Set();
  
  while (queue.length) {
    const node = queue.shift();
    
    answer.push(node);
    visited.add(node);
    
    for (const neighbor of adj.get(node)) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
  
  return answer;
};
