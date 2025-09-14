/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  const totalEnergy = energy.reduce((acc, cur) => acc + cur, 0);
  const totalExp = experience.reduce((acc, cur) => acc + cur, 0);
  
  const neededEnergy = Math.max(0, totalEnergy - initialEnergy + 1);

  let sum = initialExperience;
  let neededExp = 0;

  for (let i = 0; i < experience.length; i++) {
    const cur = experience[i];

    if (sum > cur) sum += cur;
    else {
      const diff = cur - sum + 1;

      neededExp += diff;
      sum += diff + cur;
    }
  }

  return neededEnergy + neededExp;
}
