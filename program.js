'use strict';
const myfilter = require('./myfilter');
const directoryName = process.argv[2];
const fileExtension = process.argv[3];

myfilter(directoryName, fileExtension, (error, data) => {
  if (error) {
    console.error(error);
  }
  data.map((item) => {
    console.log(item);
  });
});
