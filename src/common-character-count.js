const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
        arr1.slice(i, 0);
        arr2.slice(j, 0);
      }
    }
  }
  return count;
}
console.log(getCommonCharacterCount("str1", "str2"));

module.exports = {
  getCommonCharacterCount,
};
