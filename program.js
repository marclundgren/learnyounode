'use strict';
let args = process.argv.slice(2);

let result = args.reduce((previousValue, currentValue) => {
  return Number(previousValue) + Number(currentValue);
});

console.log(result);
