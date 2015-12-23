/* jshint node: true */

'use strict';

var fs = require('fs');
var _ = require('underscore');

fs.readFile('input.txt', 'utf-8', function (err, data) {
  var aunts = [];
  var auntData = {
    'children': 3,
    'cats': 7,
    'samoyeds': 2,
    'pomeranians': 3,
    'akitas': 0,
    'vizslas': 0,
    'goldfish': 5,
    'trees': 3,
    'cars': 2,
    'perfumes': 1
  };

  data = _.filter(data.split('\n'), function (num) { return num.length > 2; });
  data.forEach(function (d) {
    var aunt = {};
    d = d.split(':');
    aunt.Sue = d.shift().split(' ')[1];
    d = d.join('').trim().split(',');
    d.forEach(function (x) {
      x = x.trim().split(' ');
      aunt[x[0]] = Number(x[1]);
    });
    aunts.push(aunt);
  });
  part1(aunts, auntData);
  part2(aunts, auntData);
});

function part1(auntList, auntData) {
  auntList.forEach(function (aunt) {
    var name = aunt.Sue;
    var count = 0;
    for (var key in aunt) {
      if (aunt[key] === auntData[key]) {
        ++count;
      }
    }
    if (count === 3) {
      console.log('Part 1: ' + name);
    }
  });
}

function part2(auntList, auntData) {
  auntList.forEach(function (aunt) {
    var count = 0;
    for (var key in aunt) {
      if (key !== 'cats' && key !== 'trees' && key !== 'pomeranians' && key !== 'goldfish') { 
        if (aunt[key] === auntData[key]) {
          ++count;
        }
      }
    }
    if (auntData.cats < aunt.cats) { ++count; }
    if (auntData.trees < aunt.trees) { ++count; }
    if (auntData.pomeranians > aunt.pomeranians) { ++count; }
    if (auntData.goldfish > aunt.goldfish) { ++count; }
    if (count === 3) { console.log('Part 2: ' + aunt.Sue); }
  });
}