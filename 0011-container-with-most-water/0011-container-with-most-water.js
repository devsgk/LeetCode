/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    
    max = Math.max(max, area);
    
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  
  return max;
};
