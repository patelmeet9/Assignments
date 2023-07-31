var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('./meet.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./meet.txt', 'utf-8'));
console.log("File Decompressed.");