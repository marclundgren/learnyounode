'use strict';

// JUGGLING ASYNC

const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const concatStream = require('concat-stream');

let count = 0;
let response1;
let response2;
let response3;
let allResponses = function() {
  return [response1, response2, response3];
}
let allResponsesCompleted = function() {
  return response1 && response2 && response3;
};

http.get(url1, (response) => {
  response.pipe(concatStream((data) => {
    response1 = data.toString();
    // console.log('response1: ', response1, allResponsesCompleted);
    if (allResponsesCompleted()) {
      allResponses().map((response) => {
        console.log(response);
      });
    }
  }));
});
http.get(url2, (response) => {
  response.pipe(concatStream((data) => {
    response2 = data.toString();
    // console.log('response2: ', response2, allResponsesCompleted);
    if (allResponsesCompleted()) {
      console.log(allResponses);
      allResponses().map((response) => {
        console.log(response);
      });
    }
  }));
});
http.get(url3, (response) => {
  response.pipe(concatStream((data) => {
    response3 = data.toString();
    // console.log('response3: ', response3, allResponsesCompleted);
    if (allResponsesCompleted()) {
      console.log(allResponses);
      allResponses().map((response) => {
        console.log(response);
      });
    }
  }));
});


// Official Solution

/*

var http = require('http')
var bl = require('bl')
var results = []
var count = 0
function printResults () {
 for (var i = 0; i < 3; i++)
   console.log(results[i])
}
function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
   response.pipe(bl(function (err, data) {
     if (err)
       return console.error(err)

     results[index] = data.toString()
     count++

     if (count == 3)
       printResults()
   }))
 })
}

for (var i = 0; i < 3; i++)
 httpGet(i)
*/
