const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let s = n.toString();

    while (s.length > 1) {
        s = s.split('')
            .map(n => Number(n))
            .reduce((partialSum, a) => partialSum + a, 0)
            .toString()
    }

    return Number(s);
}

module.exports = {
    getSumOfDigits
};
console.log(getSumOfDigits(91))
