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

function repeater(/* str, options */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}
// function repeater(/*str, options*/) {
// const repeatTimes = options.repeatTimes || 1;
// const separator = options.separator || "+";
// const addition = options.addition.toString() || "";
// const additionRepeatTimes = options.additionRepeatTimes || 1;
// const additionSeparator = options.additionSeparator || "|";
// // let eachPart = str.toString();
// let eachPart =
//   str.toString() +
//   (options.addition.toString !== "undefined"
//     ? addition + additionSeparator
//     : ""
//   ).repeat(additionRepeatTimes);
// if (options.addition.toString !== "undefined") {
//   eachPart = eachPart.slice(0, eachPart.length - additionSeparator.length);
// }
// const result = eachPart.repeat(repeatTimes, separator);

// if (options.additionRepeatTimes) {
//   for (let i = 0; i < options.additionRepeatTimes; i++) {
//     if (i === options.additionRepeatTimes - 1) {
//       eachPart += options.addition ? options.addition : "";
//     } else {
//       eachPart +=
//         (options.addition ? options.addition : "") +
//         (options.additionSeparator ? options.additionSeparator : "|");
//     }
//   }
// } else {
//   eachPart += options.addition
//     ? options.addition
//     : "" + options.additionSeparator;
// }
// console.log("eachPart", eachPart);
// let result = eachPart;
// if (options.repeatTimes) {
//   for (let i = 0; i < options.repeatTimes; i++) {
//     if (i === options.repeatTimes - 1) {
//       result += eachPart;
//     } else {
//       result += eachPart + (options.separator ? options.separator : "+");
//     }
//   }
// }
// console.log("result", result);
// return result;
// }

// repeater("STRING", {
//   repeatTimes: 3,
//   separator: "**",
//   addition: "PLUS",
//   additionRepeatTimes: 3,
//   additionSeparator: "00",
// });

module.exports = {
  repeater,
};
