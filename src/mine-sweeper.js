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
  throw new NotImplementedError("Not implemented");
  // const result = matrix.map((row, i) =>
  //   row.map((col, j) => {
  //     let item = 0;
  //     // console.log(matrix[10][10]);
  //     if (
  //       matrix[i][j] ||
  //       (i !== matrix.length && matrix[i + 1][j]) ||
  //       (i !== 0 && matrix[i - 1][j]) ||
  //       (j !== row.length && matrix[i][j + 1]) ||
  //       (j !== 0 && matrix[i][j - 1])
  //     ) {
  //       item++;
  //     }
  //     return item;
  //   })
  // );
  // const result = [];
  // for (let i = 0; i < matrix.length; i++) {
  //   result.push([]);
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     let item = 0;
  //     if (matrix[i][j]) item++;
  //     if (i - 1 >= 0 && matrix[i - 1][j]) item++;
  //     if (i + 1 <= matrix.length && matrix[i + 1][j]) item++;
  //     if (j - 1 > 0 && matrix[i][j - 1]) item++;
  //     if (j + 1 <= matrix[i].length && matrix[i][j + 1]) item++;
  //     result[i][j] = item;
  //   }
  // }
  // return result;
  //   const result = [];
  //   for (let i = 0; i < matrix.length; i++) {
  //   result.push([]);
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     let bombs = 0;
  //     for (let row = i - 1; row <= i + 1; row++) {
  //       for (let col = j - 1; col <= j + 1; col++) {
  //         if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[i].length) {
  //           if (matrix[row][col]) {
  //             bombs++;
  //           }
  //         }
  //       }
  //     }
  //     if (matrix[i][j]) {
  //       bombs--;
  //     }
  //     result[i][j] = bombs;
  //   }
  //   }
  //   return result;
}

module.exports = {
  minesweeper,
};
