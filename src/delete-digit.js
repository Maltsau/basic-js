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
  const arr = Array.from(String(n), Number);
  return Math.max(
    ...arr.map((item, i) => {
      const result = arr.slice();
      result.splice(i, 1);
      return +result.join("");
    })
  );
}

module.exports = {
  deleteDigit,
};
