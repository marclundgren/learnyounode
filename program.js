'use strict';

// HTTP UPPERCASERER

const http = require('http');
const map = require('through2-map');
const portNumber = process.argv[2];

http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
}).listen(portNumber);
