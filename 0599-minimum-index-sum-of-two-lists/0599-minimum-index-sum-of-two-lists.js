/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const list1Map = new Map();

  for (let i = 0; i < list1.length; i++) {
    const cur = list1[i];

    list1Map.set(cur, i);
  }

  let min = Infinity;
  const result = [];

  for (let i = 0; i < list2.length; i++) {
    const cur = list2[i];

    if (list1Map.has(cur)) {
      const sum = i + list1Map.get(cur);

      if (sum < min) {
        result.length = 0;
        result.push(cur);
        min = sum;
      } else if (sum === min) {
        result.push(cur);
      }
    }
  }

  return result;
};
