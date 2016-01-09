/* jshint node: true */

"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  let matrix = _.map(_.filter(data.split("\n"), d => d.length > 0), list => list.split(""));
  console.log("Part 1: " + stateAfterIterations(matrix, 100, 1));
  matrix = turnCornerLightsOn(matrix);
  console.log("Part 2: " + stateAfterIterations(matrix, 100, 2));
});

function stateAfterIterations(matrix, iterations, mode) {
  while (iterations > 0) {
   matrix = returnNewMatrix(matrix, mode);
    --iterations;
  }
  return numberOfLightsOn(matrix);
}

function returnNewMatrix(matrix, mode) {
  let newMatrix = [];
  for (let row in matrix) {
    let newRow = [];
    for (let column in matrix[row]) {
      let point = [Number(row), Number(column)];
      newRow.push(returnNewState(point, matrix, mode));
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

function turnCornerLightsOn(matrix) {
  const dimensions = [matrix[0].length, matrix[1].length];
  matrix[0][0] = "#";
  matrix[0][dimensions[0] - 1] = "#";
  matrix[dimensions[0] - 1][0] = "#";
  matrix[dimensions[0] - 1][dimensions[1] - 1] = "#";
  return matrix;
}

function numberOfLightsOn(matrix) {
  return _.filter(_.flatten(matrix), d => d === "#").length;
}

function returnNewState(point, matrix, mode) {
  if (mode === 2 && getNeighbours(point, matrix).length === 3) {
    return "#";
  }
  if (isOn(point, matrix) && (neighboursOn(point, matrix) >= 2 && neighboursOn(point, matrix) <= 3)) {
    return "#";
  } else if (!isOn(point, matrix) && neighboursOn(point, matrix) === 3) {
    return "#";
  } else {
    return ".";
  }
}

function getNeighbours(point, matrix) {
  // Pretty funky lookin'?
  let matrixDimensions = [matrix[0].length, matrix[1].length];
  const permutations = _.map(_.range(point[0] - 1, point[0] + 2), (item) => {
    return _.map(_.range(point[1] - 1, point[1] + 2), item2 => [item, item2]);
  });
  return _.filter(_.flatten(permutations, true), item => 
    (item[0] + 1 <= matrixDimensions[0] && item[1] + 1 <= matrixDimensions[1] && (item[0] >= 0 && item[1] >= 0) 
      && (item[0] !== point[0] || item[1] !== point[1])));
}

function neighboursOn(point, matrix) {
  return _.compact(_.map(getNeighbours(point, matrix), item => matrix[item[0]][item[1]] === "#")).length;
}

function isOn(point, matrix) {
  return matrix[point[0]][point[1]] === "#";
}