'use strict';
const fs = require('fs');

let path = process.argv[2];
let fileExtension = process.argv[3];

(function searchPathForFileExtension(path, extension) {
  let fileNames = fs.readdir(path, (error, list) => {
    list.forEach((item) => {
      if (item.match(`.${fileExtension}`)) {
        console.log(item);
      }
    });
  });
})(path, fileExtension)
