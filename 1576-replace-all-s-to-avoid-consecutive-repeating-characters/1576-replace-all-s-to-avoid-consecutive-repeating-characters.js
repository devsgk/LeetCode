/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    let newCharCode = 97;

    if (arr[i] === "?") {
      if (i === 0) {
        const nextCharCode = arr[i + 1]?.charCodeAt();

        while (newCharCode === nextCharCode) {
          newCharCode += 1;
        }

        arr[i] = (String.fromCharCode(newCharCode));
      } else if (i === arr.length - 1) {
        const prevCharCode = arr[i - 1].charCodeAt();

        while (newCharCode === prevCharCode) {
          newCharCode += 1;
        }

        arr[i] = (String.fromCharCode(newCharCode));
      } else {
        const nextCharCode = arr[i + 1].charCodeAt();
        const prevCharCode = arr[i - 1].charCodeAt();

        while (newCharCode === nextCharCode || newCharCode === prevCharCode) {
          newCharCode += 1;
        }

        arr[i] = (String.fromCharCode(newCharCode));
      }
    } else {
      arr[i] = arr[i];
    }
  }

  return arr.join("");
};
