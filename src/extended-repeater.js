const {NotImplementedError} = require('../extensions/index.js');
const common = require("mocha/lib/interfaces/common");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {

    if(obj.separator  === undefined ){
        obj.separator  = '+'
    }
    if(obj.addition  === undefined ){
        obj.addition  = ''
    }
    if(obj.repeatTimes  === undefined ){
        obj.repeatTimes  = 1
    }
    if(obj.additionRepeatTimes  === undefined ){
        obj.additionRepeatTimes  = 1
    }
    if(obj.additionSeparator  === undefined ){
        obj.additionSeparator  = '|'
    }

    let segment = String(str);

    let t = ''
    for (let i = 0; i < obj.additionRepeatTimes; i++) {
        segment =  segment + obj.addition;
        if (i !== obj.additionRepeatTimes - 1) {
            segment = segment + obj.additionSeparator
        }
    }

    for (let a = 0; a < obj.repeatTimes; a++) {
        t = t + segment
        if (a !== obj.repeatTimes - 1) {
            t = t + obj.separator
        }
    }



    return t;
}

module.exports = {
    repeater
};

const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
