/* jshint node: true */

'use strict';

var _ = require('underscore');
var fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
  var list = _.filter(data.split("\n"), function (d) { return d.length > 0; });
  console.log(_.reduce(list, function (memo, d) { return memo + (lineLength(d) - lineLengthInChars(d)); }, 0));
});

function lineLength(line) {
  return line.length;
}

function lineLengthInChars(line) {
  return line.slice(1, -1).replace(/\\\\/g, '-').replace(/\\x(.){2}/g, '-').replace(/\\"/g, '-').length;
}