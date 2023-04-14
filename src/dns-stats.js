const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let d = {};

    domains.forEach(function (item, index) {
        let u = item.split('.').reverse();
        let world = '';

        for (let value of u) {
            console.log(value)
            world = world + `.${value}`
            d[world] = (d[world] || 0)+1;
        }

    })
    return d
}

module.exports = {
    getDNSStats
};
console.log(getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
]))
