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
/*   let newStr = "";

  for (let j = 0; j < options.additionRepeatTimes; j++) {
    if (!options.additionSeparator) {
      options.additionSeparator = "|";
    }
    str +=
      j === options.additionRepeatTimes - 1
        ? options.addition
        : options.addition + options.additionSeparator;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    if (!options.separator) {
      options.separator = "+";
    }
    newStr += i === options.repeatTimes - 1 ? str : str + options.separator;
  }
  return newStr; */
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater,
};
