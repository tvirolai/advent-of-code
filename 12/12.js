/* jshint node: true */

'use strict';

var fs = require('fs');
var _ = require('underscore');

fs.readFile('input.txt', 'utf-8', function (err, data) {
  flattenAndSum(data, 1);
  data = data.replace(/red/g, 0);
  flattenAndSum(data, 2);
  //console.log(data.split("red").length);
});

function flattenAndSum(string, part) {
  var numbers = _.filter(string.replace(/[^\d-]/g, ' ').split(' '), function (d) { return parseInt(d); });
  console.log('Part ' + part + ': ' + _.reduce(numbers, function (memo, d) { return memo + Number(d); }, 0));
}
