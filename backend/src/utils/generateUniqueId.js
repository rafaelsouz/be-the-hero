const crypto = require('crypto');

module.exports = function gererateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
};
