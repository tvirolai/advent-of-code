/* jshint node: true */

/* A brute force solution that turned pretty inelegant after part 2 of the puzzle was revealed. */

"use strict";

const fs = require("fs");
const _ = require("lodash");
const Combinatorics = require("js-combinatorics");

fs.readFile("input.txt", "utf-8", (err, data) => {
  // A variable (an array of arrays) that stores the instructions, like [["Alice", "Bob", -14], ...]
  let combinations = [];
  // The possible permutations of the sitting order
  let cmb;
  combinations = _.map(data.split("\n"), row => {
    let arrangement = [];
    arrangement.push(row.split(" ")[0]);
    arrangement.push(row.split(" ").slice(-1).pop().split(".")[0]);
    arrangement.push(Number(row.replace(/lose\s/, "-").match(/(.)\d+/)[0]));
    return arrangement;
  });
  let people = _.uniq(_.filter(_.flatten(combinations, true), item => isNaN(item)));
  cmb = Combinatorics.permutation(people).toArray();
  compute(cmb, combinations, 1);
  people.push("me");
  cmb = Combinatorics.permutation(people).toArray();
  compute(cmb, combinations, 2);
});

function compute(cmb, combinations, part) {
  let max;
  for (let i = 0; i < cmb.length; i++) {
    let result = pointsForPermutation(cmb[i], combinations);
    if (result > max || max === undefined) { max = result };
  }
  console.log(`Part ${part}: ${max}`);
}

function pointsForPermutation(sittingOrder, combinations) {
  let points = 0;
  // Calculate the points for the people on other places than the first or the last index
  for (let i = 1; i < sittingOrder.length - 1; i++) {
    for (let y = 0; y < combinations.length; y++) {
      if (sittingOrder[i] === combinations[y][0] && sittingOrder[i - 1] === combinations[y][1]) {
        if (sittingOrder[i] !== "me" && sittingOrder[i - 1] !== "me") {
          points += combinations[y][2];
        }
      }  
      if (sittingOrder[i] === combinations[y][0] && sittingOrder[i + 1] === combinations[y][1]) {
        if (sittingOrder[i] !== "me" && sittingOrder[i + 1] !== "me") {
          points += combinations[y][2];
        }
      }
    }
  }
  // Calculate the points for the first and last person
  for (let i = 0; i < combinations.length; i++) {
    if (sittingOrder[0] === combinations[i][0] && sittingOrder[1] === combinations[i][1]) {
      if (sittingOrder[0] !== "me" && sittingOrder[1] !== "me") {
        points += combinations[i][2];
      }
    }
    if (sittingOrder[0] === combinations[i][0] && sittingOrder[sittingOrder.length - 1] === combinations[i][1]) {
      if (sittingOrder[0] !== "me" && sittingOrder[sittingOrder.length - 1] !== "me") {
        points += combinations[i][2];
      };
    }
    if (sittingOrder[sittingOrder.length - 1] === combinations[i][0] && sittingOrder[0] === combinations[i][1]) {
      if (sittingOrder[sittingOrder.length - 1] !== "me" && sittingOrder[0] !== "me") {
        points += combinations[i][2];
      }
    }
    if (sittingOrder[sittingOrder.length - 1] === combinations[i][0] && sittingOrder[sittingOrder.length - 2] === combinations[i][1]) {
      if (sittingOrder[sittingOrder.length - 1] !== "me" && sittingOrder[sittingOrder.length - 2] !== "me") {
        points += combinations[i][2];
      }    
    }
  }
  return points;
} 
