const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = Array.from(String(n), Number);
  let newN = 0;
  if (arr.length === 1) return n;
  else newN = arr.reduce((acc, cur) => (acc += cur), 0);
  return getSumOfDigits(newN);
}

getSumOfDigits(100);

module.exports = {
  getSumOfDigits,
};
