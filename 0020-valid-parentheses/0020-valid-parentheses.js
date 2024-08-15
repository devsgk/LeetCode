/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const sLength = s.length;
    if (sLength % 2 !== 0) return false;

    const brackets = {'(': ')', '{': '}', '[': ']'};
    const stack = [];
    for (let i = 0; i < sLength; i++) {
        if (brackets[s[i]]) {
            stack.push(s[i]);
        } else if (s[i] !== brackets[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
};