'use strict';

// HTTP Collection
const concatStream = require('concat-stream');
const url = process.argv[2];
const http = require('http');

http.get(url, (response) => {
  response.pipe(concatStream((data) => {
    console.log(data.length);

    console.log(data.toString());
  }));
});
