/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
  let can = capacity;
  let steps = 0;
  
  for (let i = 0; i < plants.length; i++) {
    steps += 1;
    if (plants[i] > can) {
      steps += i * 2;
      can = capacity;
    }
    
    can -= plants[i];
  }
  
  return steps;
};