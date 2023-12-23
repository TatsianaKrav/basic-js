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

  const monthName = date.toLocaleString("default", { month: "long" });
  let season = "";

  switch (monthName) {
    case "март":
    case "апрель":
    case "май":
      season = "spring";
      break;
    case "июнь":
    case "июль":
    case "август":
      season = "summer";
      break;
    case "сентябрь":
    case "октябрь":
    case "ноябрь":
      season = "autumn";
      break;
    case "декабрь":
    case "январь":
    case "февраль":
      season = "winter";
      break;
  }

  return season;
}

module.exports = {
  getSeason,
};
