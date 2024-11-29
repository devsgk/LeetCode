/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const [day, month, year] = date.split(" ");
  const timestamp = Date.parse(`${month}  ${parseInt(day)} ${year}`);
  const d = new Date(timestamp);

  return `${d.getFullYear()}-${String((d.getMonth() + 1)).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  
};
