let fs;
fs = require('fs')
console.log('start')
fs.readFile('text','utf8',((err, data) => {
    console.log(data);
}))
console.log('End')