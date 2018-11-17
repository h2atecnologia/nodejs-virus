crypto = require('crypto');
console.log(JSON.stringify(crypto.createHash('sha256').update('very weak password').digest('hex')));
