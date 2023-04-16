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
 matrix = [
 [true, false, false],
 [false, true, false],
 [false, false, false]
 ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.log("matrix", matrix);
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    result.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      let bombsArround = 0;
      if (row > 0 && col > 0 && matrix[row - 1][col - 1]) {
        bombsArround++;
        console.log("north-west");
      }
      if (row > 0 && matrix[row - 1][col]) {
        bombsArround++;
        console.log("north");
      }
      if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1]) {
        bombsArround++;
        console.log("north-east");
      }
      if (col < matrix[row].length - 1 && matrix[row][col + 1]) {
        bombsArround++;
        console.log("east");
      }
      if (
        row < matrix.length - 1 &&
        col < matrix[row].length - 1 &&
        matrix[row + 1][col + 1]
      ) {
        bombsArround++;
        console.log("south-east");
      }
      if (row < matrix.length - 1 && matrix[row + 1][col]) {
        bombsArround++;
        console.log("south");
      }
      if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1]) {
        bombsArround++;
        console.log("south-west");
      }
      if (col > 0 && matrix[row][col - 1]) {
        bombsArround++;
        console.log("west");
      }
      result[row].push(bombsArround);
    }
  }
  console.log("result", result);
  return result;
}

module.exports = {
  minesweeper,
};
