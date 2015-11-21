'use strict';
const fs = require('fs');

module.exports = function (directoryName, fileExtension, callback) {
  fs.readdir(directoryName, (error, list) => {
    if (error) {
      return callback(error);
    }

    let filteredList = list.filter((item) => {
      return item.match(`.${fileExtension}`);
    });

    callback(error, filteredList);
  });
};

// suggested solution:

/*
var fs = require('fs')
var path = require('path')
module.exports = function (dir, filterStr, callback) {
 fs.readdir(dir, function (err, list) {
   if (err)
     return callback(err)

   list = list.filter(function (file) {
     return path.extname(file) === '.' + filterStr
   })

   callback(null, list)
 })
}
*/
