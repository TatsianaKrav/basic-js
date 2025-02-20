const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  if (
    !(date instanceof Date) ||
    !Object.getOwnPropertyNames(date.__proto__).includes("toLocaleString")
  ) {
    throw new Error("Invalid date!");
  }

  try {
    date.getUTCDay();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  let season = "";

  if (month === 11 || month === 0 || month === 1) {
    season = "winter";
  } else if (month >= 2 && month <= 4) {
    season = "spring";
  } else if (month >= 5 && month <= 7) {
    season = "summer";
  } else {
    season = "autumn";
  }

  return season;
}

module.exports = {
  getSeason,
};
