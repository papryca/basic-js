const {NotImplementedError} = require('../extensions/index.js');

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
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }

    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date!');
        }

        let n = date.getMonth();

        if (n === 11 || n === 0 || n === 1) {
            return 'winter';
        } else if (n >= 2 && n <= 4) {
            return 'spring';
        } else if (n >= 5 && n <= 7) {
            return 'summer';
        } else if (n >= 8 && n <= 10) {
            return 'autumn';
        }
    } catch (e) {
        throw new Error('Invalid date!');
    }
}

module.exports = {
    getSeason
};