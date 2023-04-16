const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (
    options.addition === null ||
    options.addition === false ||
    Object.hasOwnProperty(options.addition)
  ) {
    options.addition = String(options.addition);
  }
  if (str === null || Object.hasOwnProperty(str)) {
    str = String(str);
  }
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";
  const addition = options.addition || "";

  let eachPart = str;
  const eachAdd = [];
  for (let i = 1; i <= additionRepeatTimes; i++) {
    eachAdd.push(addition);
  }
  eachPart += eachAdd.join(additionSeparator);

  let result = [];
  for (let i = 1; i <= repeatTimes; i++) {
    result.push(eachPart);
  }
  result = result.join(separator);
  return result;
}

module.exports = {
  repeater,
};
