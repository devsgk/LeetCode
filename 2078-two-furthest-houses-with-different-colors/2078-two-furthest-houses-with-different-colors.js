/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
  const obj = {};

  for (let i = 0; i < colors.length; i++) {
    const cur = colors[i];

    for (let j = 0; j < colors.length; j++) {
      if (i !== j) {
        const next = colors[j];
        
        if (cur !== next) {
          const diff = Math.abs(i - j);

          obj[cur] = obj[cur] ? Math.max(diff, obj[cur]) : diff;
        }
      }
    }
  }

  let max = 0;

  for (const [key, value] of Object.entries(obj)) {
    max = Math.max(max, value);
  }

  return max;
};
