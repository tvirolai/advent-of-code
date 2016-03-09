/* jshint node: true */

"use strict";

function valueByIndex(n) {
  let value = 20151125;
  if (n === 0) {
    return value;
  } else if (n === 1) {
    return value * 252533 % 33554393;
  } else {
    return valueByIndex(n-1) * 252533 % 33554393;
  }
}

console.log(valueByIndex(10000));
