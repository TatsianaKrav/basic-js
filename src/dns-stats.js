const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  for (let i = 0; i < domains.length; i++) {
    const stringArr = domains[i].split(".");

    let newStr = "";
    for (let j = stringArr.length - 1; j >= 0; j--) {
      newStr += "." + stringArr[j];
      stringArr[j] = newStr;
    }
    domains[i] = stringArr;
  }
  domains = domains.flat(Infinity);

  let resultObj = {};
  let count = 0;
  for (let i = 0; i < domains.length; i++) {
    if (resultObj.hasOwnProperty(domains[i])) continue;

    for (let j = i; j < domains.length; j++) {
      if (domains[i] === domains[j]) {
        count++;
      }
    }

    resultObj[domains[i]] = count;
    count = 0;
  }

  return resultObj;
  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
};
