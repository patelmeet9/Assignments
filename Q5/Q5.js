var fs = require("fs");
var zlib = require('zlib'); // Compress the file input.txt to input.txt.gz
fs.createReadStream('./meet.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./meet.txt.gz'));
console.log("File Compressed.");