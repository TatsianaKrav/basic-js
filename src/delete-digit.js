const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [...n.toString()];
  let max = 0;
  let missedIndex = 0;
  let newNum = "";

  while (missedIndex < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (i === missedIndex) {
        continue;
      } else {
        newNum += arr[i];
      }
    }
    max = max > +newNum ? max : +newNum;
    newNum = "";
    missedIndex += 1;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
