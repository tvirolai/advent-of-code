/* jshint node: true */
"use strict";

var fs = require("fs");
var _ = require("underscore");

fs.readFile("input.txt", "utf-8", function (err, data) {
  console.log("Total amount of paper needed: " + totalPaper(data));
  console.log("Total amount of ribbon needed: " + totalRibbon(data));
});

function paperNeeded(line) {
  var dimensions = line.split("x").map(Number);
  var areas = _.map(dimensions, function (d, i) { return (dimensions[i + 1]) ? d * dimensions[i + 1] : d * dimensions[0]; });
  return _.min(areas) + _.reduce(areas, function (memo, d) { return memo += 2 * d;}, 0);
}

function totalRibbon(data) {
  return _.reduce(data.split("\n"), function (memo, item) { return memo += ribbonNeeded(item); }, 0); 
}

function totalPaper(data) {
  return _.reduce(data.split("\n"), function (memo, item) { return memo += paperNeeded(item);}, 0);
}

function ribbonNeeded(line) {
  var dimensions = line.split("x").map(Number);
  return ribbonForWrapping(dimensions) + ribbonForTheBow(dimensions);
}

function ribbonForWrapping(array) {
  var sorted = _.sortBy(array, function (num) { return num; });
  sorted.pop();
  return _.reduce(sorted, function (memo, d) { return memo += (2 * d)}, 0);
}

function ribbonForTheBow(array) {
  return _.reduce(array, function (memo, d) { return memo *= d; }, 1);
}