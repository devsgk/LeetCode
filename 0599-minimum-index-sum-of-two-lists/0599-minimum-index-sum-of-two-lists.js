/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const list1Map = new Map();
  const list2Map = new Map();
  const sumMap = new Map();

  for (let i = 0; i < list1.length; i++) {
    const cur = list1[i];

    list1Map.set(cur, i);
  }

  for (let i = 0; i < list2.length; i++) {
    const cur = list2[i];

    list2Map.set(cur, i);
  }

  for (let i = 0; i < list1.length; i++) {
    const cur = list1[i];
    const index1 = list1Map.get(cur);
    const index2 = list2Map.get(cur);

    if (!isNaN(index1) && !isNaN(index2)) {
      const sum = index1 + index2;

      sumMap.set(cur, sum);
    }
  }

  let min = Infinity;

  for (const [key, value] of sumMap) {
    min = Math.min(min, value);
  }

  const result = [];

  for (const [key, value] of sumMap) {
    if (value === min) result.push(key);
  }

  return result;
};
