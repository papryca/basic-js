const {NotImplementedError} = require('../extensions/index.js');


/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let o = ""
    let num = 0
    let prev = str[0]
    for (let i = 0; i <= str.length; i++) {
        let current = str[i]
        if(current === prev){
            num++;
        }else{
            o = o+ num +prev
            num = 1
            prev = current
        }
    }
    return o.replace(/1/g , "")
}


module.exports = {
    encodeLine
};
console.log(encodeLine('aabbbc'))
