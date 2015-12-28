'use strict';

// HTTP JSON API SERVER

const http = require('http');
// const map = require('through2-map');
const contains = require('string-contains');
const portNumber = process.argv[2];
const queryString = require('query-string');
const moment = require('moment');

http.createServer((request, response) => {
  if (request.method === 'GET') {
    let isUnixtime = request.url === '/api/unixtime';

    let isParsetime = contains(request.url, 'parsetime');

    if (isParsetime) {
      let params = request.url.slice('/api/parsetime'.length);
      let parsedParams = queryString.parse(params);
      let parsedDate = parsedParams.iso;

      let convertedDate = moment(parsedDate);
      let output = {
        hour: convertedDate.hour(),
        minute: convertedDate.minute(),
        second: convertedDate.second()
      };

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(output));

      response.end();

    }
    // /api/parsetime

    if (isUnixtime) {
      console.log('unixtime request');
    }
  }

}).listen(portNumber);
