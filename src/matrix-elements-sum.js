const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        for (let u = 0; u < matrix.length; u++) {
            if (matrix[u][i] !== 0) {
                sum = sum + matrix[u][i]
            }else{
                break
            }
        }

    }
    return sum
}

module.exports = {
    getMatrixElementsSum
};
console.log(getMatrixElementsSum(matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
]))
