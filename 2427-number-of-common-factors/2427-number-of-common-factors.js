/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    const minValue = Math.min(a, b);
    
    // Initialize the count of common factors
    let commonFactorCount = 0;
    
    // Check each number from 1 to minValue
    for (let i = 1; i <= minValue; i++) {
        if (a % i === 0 && b % i === 0) {
            commonFactorCount++;
        }
    }
    
    return commonFactorCount;
};
