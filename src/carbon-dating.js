const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  let sampleActivityNum = 0;

  if (
    sampleActivity &&
    typeof sampleActivity === "string" &&
    sampleActivity.includes(".")
  ) {
    sampleActivityNum = parseFloat(sampleActivity);
  } else {
    sampleActivityNum = parseInt(sampleActivity);
  }

  if (
    Number.isNaN(sampleActivityNum) ||
    typeof sampleActivity !== "string" ||
    arguments.length === 0 ||
    sampleActivityNum <= 0 ||
    sampleActivityNum > 2024
  )
    return false;

  const age = Math.log(MODERN_ACTIVITY / sampleActivityNum) / k;
  if (age < 0) return false;
  return Math.ceil(age);

  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  dateSample,
};
