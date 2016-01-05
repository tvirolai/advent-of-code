/* jshint node: true */
// Not finished yet...

"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  const matrix = _.map(_.filter(data.split("\n"), (d) => d.length > 0), (list) => list.split(""));
  console.log(neighboursOn([0, 1], matrix));
});

function getNeighbours(point) {
  // The function takes and returns an array. Pretty funky lookin', I know.
  const permutations = _.map(_.range(point[0] - 1, point[0] + 2), (item) => {
    return _.map(_.range(point[1] - 1, point[1] + 2), (item2) => [item, item2]);
  });
  return _.filter(_.filter(_.flatten(permutations, true), (item) => !(item[0] - point[0] === 0 && item[1] - point[1] === 0)), (item) => (item[0] >= 0 && item[1] >= 0));
}

function neighboursOn(point, matrix) {
  return _.filter(_.map(getNeighbours(point), (item) => matrix[item[0]][item[1]] === "#"), (item) => item === true).length;
}