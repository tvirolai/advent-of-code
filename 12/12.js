/* jshint node: true */

"use strict";

const fs = require("fs");
const _ = require("lodash");

fs.readFile("input.txt", "utf-8", (err, data) => {
  part1(data);
  part2(data);
});

function part1(data) {
  let numbers = _.filter(data.replace(/[^-|\d+]/g, " ").split(" "), d => d.length > 0);
  let sum = _.reduce(numbers, (memo, num) => memo + Number(num), 0);
  console.log("Part 1: " + sum);
}

function part2(data) {
  let dataWithoutRed = data.replace(/{(.)*red(.)*}/g, " ");
  console.log(dataWithoutRed)
}