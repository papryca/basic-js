const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        throw new NotImplementedError('Not implemented');
        if (arguments.length === 0) {
            this.chain.push('( )');
        } else {
            this.chain.push(`( ${value} )`); // добавляем новый элемент в цепочку
        }
        return this; // возвращаем объект для возможности цепочного вызова
    },

    removeLink(/* position */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    reverseChain() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    finishChain() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
};

module.exports = {
    chainMaker
};
