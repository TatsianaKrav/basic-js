const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let arr = [];
  let count = 0;

  for (let i = 0; i < rows; i++) {
    let rowsArr = [];

    for (let j = 0; j < columns; j++) {
      //first row
      if (i === 0) {
        if (j === 0) {
          matrix[i][j + 1] ? count++ : (count += 0);
          matrix[i + 1][j] ? count++ : (count += 0);
          matrix[i + 1][j + 1] ? count++ : (count += 0);
        } else if (j === columns - 1) {
          matrix[i][j - 1] ? count++ : (count += 0);
          matrix[i + 1][j] ? count++ : (count += 0);
          matrix[i + 1][j - 1] ? count++ : (count += 0);
        } else {
          matrix[i][j - 1] ? count++ : (count += 0); // left
          matrix[i][j + 1] ? count++ : (count += 0); // right
          matrix[i + 1][j] ? count++ : (count += 0); //
          matrix[i + 1][j - 1] ? count++ : (count += 0);
          matrix[i + 1][j + 1] ? count++ : (count += 0);
        }
        rowsArr.push(count);
        count = 0;

        //last row
      } else if (i === rows - 1 && i !== 0) {
        if (j === 0) {
          matrix[i][j + 1] ? count++ : (count += 0);
          matrix[i - 1][j] ? count++ : (count += 0);
          matrix[i - 1][j + 1] ? count++ : (count += 0);
        } else if (j === columns - 1) {
          matrix[i][j - 1] ? count++ : (count += 0);
          matrix[i - 1][j] ? count++ : (count += 0);
          matrix[i - 1][j - 1] ? count++ : (count += 0);
        } else {
          matrix[i][j - 1] ? count++ : (count += 0); // left
          matrix[i][j + 1] ? count++ : (count += 0); // right
          matrix[i - 1][j] ? count++ : (count += 0); //
          matrix[i - 1][j - 1] ? count++ : (count += 0);
          matrix[i - 1][j + 1] ? count++ : (count += 0);
        }
        rowsArr.push(count);
        count = 0;
      } else {
        //first column
        if (j === 0) {
          matrix[i][j + 1] ? count++ : (count += 0); // right
          matrix[i - 1][j] ? count++ : (count += 0); //
          matrix[i - 1][j - 1] ? count++ : (count += 0);
          matrix[i + 1][j] ? count++ : (count += 0);
          matrix[i + 1][j + 1] ? count++ : (count += 0);

          //last column
        } else if (j === columns - 1) {
          matrix[i][j - 1] ? count++ : (count += 0); // left
          matrix[i - 1][j] ? count++ : (count += 0); //
          matrix[i - 1][j - 1] ? count++ : (count += 0);
          matrix[i + 1][j] ? count++ : (count += 0);
          matrix[i + 1][j + 1] ? count++ : (count += 0);
        } else {
          matrix[i][j - 1] ? count++ : (count += 0); // left
          matrix[i][j + 1] ? count++ : (count += 0); // right
          matrix[i - 1][j] ? count++ : (count += 0); //
          matrix[i - 1][j - 1] ? count++ : (count += 0);
          matrix[i - 1][j + 1] ? count++ : (count += 0);
          matrix[i + 1][j] ? count++ : (count += 0);
          matrix[i + 1][j + 1] ? count++ : (count += 0);
          matrix[i + 1][j - 1] ? count++ : (count += 0);
        }
        rowsArr.push(count);
        count = 0;
      }
    }
    arr.push(rowsArr);
  }

  for (let i = 0; i < arr.length; i++) {
    matrix[i].join(" ");
  }

  return arr;

  /* throw new NotImplementedError('Not implemented'); */
  // remove line with error and write your code here
}

module.exports = {
  minesweeper,
};
