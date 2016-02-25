/* jshint node: true */

"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  console.log("Part 1: " + part1(data) + "\nPart 2: " + part2(JSON.parse(data)));
});

function part1(data) {
  let numbers = _.filter(data.replace(/[^-|\d+]/g, " ").split(" "), d => d.length > 0);
  return _.reduce(numbers, (memo, num) => memo + Number(num), 0);
}

// Part 2 was admittedly "inspired" by some solutions in the subreddit r/adventofcode
function part2(data) {
  let count = 0;
  if (typeof data === "object" && !Array.isArray(data)) {
    for (let key in data) {
      if (data[key] === "red") {
        return 0;
      }
    }
  }

  for (let key in data) {
    if (typeof data[key] === "object") {
      count += part2(data[key]);
    } else if (typeof data[key] === "number") {
      count += data[key];
    }
  }
  return count;
}