/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  let prefLength = prefix.length;

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];

    while (prefix !== str.slice(0, prefLength)) {
      prefLength--;

      if (prefLength === 0) return "";

      prefix = prefix.slice(0, prefLength);
    }
  }

  return prefix;
}
