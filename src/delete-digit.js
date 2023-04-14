const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let b = 0;
    let nNew = n.toString();
    let r = nNew.split('');
    let u = r.map(Number);
    for (let i = 0; i < u.length; i++) {
        n = u.slice();
        n.splice(i, 1)
        num = Number(n.join(''))
        if (num > b) {
            b = num;
        }


    }
return b;
    //  let nMin = 0;
    // for (let i = 0; i<nNew.length; i++){
    //   if (nNew[i]>nNew[i+1] && nNew[i+1]<nMin){
    //     nMin= nNew[i+1]
    //   }else {
    //     nMin= nNew[i]
    //   }
    // }
    // return nMin
}

module.exports = {
    deleteDigit
};
console.log(deleteDigit(342))
