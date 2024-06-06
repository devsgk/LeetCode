/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  return details.filter(el => el.slice(11,13) > 60).length;
};