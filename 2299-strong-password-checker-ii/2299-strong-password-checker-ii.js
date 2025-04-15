/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  let has8Chars = password.length >= 8;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasDigit = false;
  let hasSpecialChar = false;
  let hasAdjacent = false;
  const specialChars = "!@#$%^&*()-+".split("");
  let prev = "";

  for (const letter of password) {
    if (prev && prev === letter) {
      hasAdjacent = true;
    }

    prev = letter;
    
    
    if (specialChars.includes(letter)) {
      hasSpecialChar = true;
    } else if (isNaN(letter) === false) {
      hasDigit = true;
    } else {
      if (letter.toLowerCase() === letter) hasLowerCase = true;
      if (letter.toUpperCase() === letter) hasUpperCase = true;
    }
  }

  return !hasAdjacent && has8Chars && hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar;
};
