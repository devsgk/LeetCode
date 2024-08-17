/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  const totalPickupTime = garbage.join("").length;
  const obj = {
    "G": [],
    "P": [],
    "M": [],
  }

  for (let i = 0; i < garbage.length; i++) {
    const house = garbage[i];
    
    for (let j = 0; j < house.length; j++) {
      const type = house[j];
      
      obj[type].push(i);
    }
  }

  const indices = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value.length === 0) {
      continue;
    }
    
    const max = Math.max(...value);
    
    indices.push(max);
  }
  
  let totalTravelTime = 0;
  
  for (const index of indices) {
    const time = travel.slice(0, index).reduce((acc, cur) => acc + cur , 0);

    totalTravelTime += time;
  }
  
  return totalPickupTime + totalTravelTime;
};