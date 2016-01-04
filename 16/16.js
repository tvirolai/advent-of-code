/* jshint node: true */

'use strict';

const fs = require('fs');
const _ = require('underscore');

const auntData = {
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

fs.readFile('input.txt', 'utf-8', (err, data) => {
  let aunts = [];
  data = _.filter(data.split('\n'), (num) => num.length > 2);
  data.forEach( (d) => {
    let aunt = {};
    d = d.split(':');
    aunt.Sue = d.shift().split(' ')[1];
    d = d.join('').trim().split(',');
    d.forEach( (x) => {
      x = x.trim().split(' ');
      aunt[x[0]] = Number(x[1]);
    });
    aunts.push(aunt);
  });
  part1(aunts);
  part2(aunts);
});

function part1(auntList) {
  auntList.forEach( (aunt) => {
    let count = 0;
    for (let key in aunt) {
      if (aunt[key] === auntData[key]) {
        ++count;
      }
    }
    if (count === 3) {
      console.log('Part 1: ' + aunt.Sue);
    }
  });
}

function part2(auntList) {
  auntList.forEach( (aunt) => {
    let count = 0;
    for (let key in aunt) {
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