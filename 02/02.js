/* jshint node: true */
"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  console.log("Total amount of paper needed: " + totalPaper(data));
  console.log("Total amount of ribbon needed: " + totalRibbon(data));
});

function totalPaper(data) {
  return _.reduce(data.split("\n"), (memo, item) => memo += paperNeeded(item), 0);
}

function totalRibbon(data) {
  return _.reduce(data.split("\n"), (memo, item) => memo += ribbonNeeded(item), 0); 
}

function paperNeeded(line) {
  const dimensions = line.split("x").map(Number);
  const areas = _.map(dimensions, (d, i) => (dimensions[i + 1]) ? d * dimensions[i + 1] : d * dimensions[0]);
  return _.min(areas) + _.reduce(areas, (memo, d) => memo += 2 * d, 0);
}

function ribbonNeeded(line) {
  const dimensions = line.split("x").map(Number);
  return ribbonForWrapping(dimensions) + ribbonForTheBow(dimensions);
}

function ribbonForWrapping(array) {
  const sorted = _.sortBy(array, (num) => num);
  sorted.pop();
  return _.reduce(sorted, (memo, d) => memo += (2 * d), 0);
}

function ribbonForTheBow(array) {
  return _.reduce(array, (memo, d) => memo *= d, 1);
}