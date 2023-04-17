const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
  let u = ''
  for(let i = 0; i<email.length;i++){
    if (email[i] === '@'){
       u =  email.slice(i+1)
    }

  }
  return u
}

module.exports = {
  getEmailDomain
};