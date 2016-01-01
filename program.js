'use strict';

// HTTP JSON API SERVER

const http = require('http');
const contains = require('string-contains');
const portNumber = process.argv[2];
const queryString = require('query-string');
const moment = require('moment');

http.createServer((request, response) => {
  if (request.method === 'GET') {
    let isUnixtime = contains(request.url, 'unixtime');
    let isParsetime = contains(request.url, 'parsetime');

    response.writeHead(200, { 'Content-Type': 'application/json' });

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

      response.write(JSON.stringify(output));

      response.end();
    }

    if (isUnixtime) {
      console.log('unixtime request');
      let params = request.url.slice('/api/unixtime'.length);
      let parsedParams = queryString.parse(params);
      let parsedDate = parsedParams.iso;
      let convertedDate = moment(parsedDate);
      let output = {
        // unixtime: convertedDate.unix()
        unixtime: convertedDate.toDate().getTime()
      };

      response.write(JSON.stringify(output));

      response.end();
    }
  }
}).listen(portNumber);
