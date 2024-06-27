/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  let obj1 = {};
  let obj2 = {};
  
  for (let i = 0; i < target.length; i++) {
    const cur1 = target[i];
    const cur2 = arr[i];

    obj1[cur1] = obj1[cur1] ? obj1[cur1] + 1 : 1;
    obj2[cur2] = obj2[cur2] ? obj2[cur2] + 1 : 1;
  }
  
  for (const [key, value] of Object.entries(obj1)) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  
  return true;
};