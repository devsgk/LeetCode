/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let count = 0;
  let prevRasers = 0;
  
  for (const raser of bank) {
    const curRasers = raser.split("").filter(el => el === "1").length;
    
    if (curRasers === 0) continue;
    
    count += (prevRasers * curRasers);
    prevRasers = curRasers;
  }
  
  return count;
};
