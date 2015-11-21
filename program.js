'use strict';
const fs = require('fs');

let path = process.argv[2];

let bufferString = fs.readFileSync(path, 'utf8');

var result = (bufferString.match(/\n/g) || []).length;

console.log(result);
