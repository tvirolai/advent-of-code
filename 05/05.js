/* jshint node: true */
"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  console.log(_.reduce(data.split("\n"), (memo, d) => (isNice(d)) ? memo + 1 : memo + 0, 0));
});

function isNice(string) {
  if (inputContains(string, ["ab", "cd", "pq", "xy"], 1))  {
    return false;
  } else if (inputContains(string, "aeiou".split(""), 3) && hasDoubleLetters(string)) {
    return true;
  } else {
    return false;
  }
}

function inputContains(string, array, limit) {
  return limit <= _.reduce(array, (memo, datum) => memo + string.split(datum).length -1, 0);
}

function hasDoubleLetters(string) {
  return _.contains(_.map(string.split(""), (d, i) => d === string.split("")[i-1]), true);
}