'use strict';

// TIME SERVER

var net = require('net');
let strftime = require('strftime');
let portNumber = process.argv[2];

var server = net.createServer(function (socket) {
  let time = strftime('%F %H:%M', new Date());
  socket.end(time);
});
server.listen(portNumber);
