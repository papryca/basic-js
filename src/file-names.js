const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {string}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let n = []

    let d ={}
    for (let i = 0; i < names.length; i++) {

        let t =0
        if (n.includes(names[i])) {
            let nu = 1
        while (n.includes(`${names[i]}(${nu})`)){
            nu++
        }
            n.push((`${names[i]}(${nu})`))
        }else {
            n.push(names[i])

        }

    }
    return n
}

module.exports = {
    renameFiles
};
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))
