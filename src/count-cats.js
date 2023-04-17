const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let n = 0
  matrix.forEach(function (item){
    item.forEach(function (item){
      if(item === '^^'){
        n = n+1
      }
    })



  })
  return n
}

module.exports = {
  countCats
};