/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const obj = {};
  
  for (const domain of cpdomains) {
    const [count, address] = domain.split(" ");
    const subAddress = address.split(".");

    for (let i = 0; i < subAddress.length; i++) {
      const sub = subAddress.slice(i).join(".");

      obj[sub] = (obj[sub] || 0) + Number(count);
    }
  }
  
  const result = [];
  
  for (const [key, value] of Object.entries(obj)) {
    result.push(`${value} ${key}`);
  }
  
  return result;
};
