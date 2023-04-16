const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date ) {
  let n = (date.getMonth())
  if(n>1 && n<=3){
    return 'winter'
  }else if(n>3 && n<=5){
    return 'spring'
  }else if(n>5 && n<=8){
    return 'summer'
  }else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
console.log(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)))
