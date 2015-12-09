/* jshint node: true */

"use strict";

var fs = require("fs");
var _ = require("underscore");

fs.readFile("input.txt", "utf-8", function (err, data) {
  var list = _.filter(data.split("\n"), function (d) { return d.length > 0; });
  console.log("Part 1: " + calculateResult(list, lineLength, lineLengthInChars));
  console.log("Part 2: " + calculateResult(list, encodedLineLength, lineLength));
});

function lineLength(line) {
  return line.length;
}

function lineLengthInChars(line) {
  return line.slice(1, -1).replace(/\\\\/g, '-').replace(/\\x(.){2}/g, '-').replace(/\\"/g, '-').length;
}

function encodedLineLength(line) {
  return ("\"\\\"" + line.slice(1, -1).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + "\\\"\"").length;
}

function calculateResult(list, firstLength, secondLength) {
  return _.reduce(list, function (memo, d) { return memo + (firstLength(d) - secondLength(d)); }, 0);
}