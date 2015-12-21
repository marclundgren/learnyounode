'use strict';

// HTTP File Server

const http = require('http');
const fs = require('fs');
const portNumber = process.argv[2];
const fileURL = process.argv[3];

http.createServer((request, response) => {
  fs.createReadStream(fileURL).pipe(response);
}).listen(portNumber);


/*
  // Official Solution

  let http = require('http')
  let fs = require('fs')
  let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(process.argv[3]).pipe(res)
  })

  server.listen(Number(process.argv[2]))
*/
