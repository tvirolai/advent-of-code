/* jshint node: true */

"use strict";

const _ = require("underscore");

const limit = 33100000;

console.log("Part 1: " + part1());

function part1() {
  let maxNoOfPresents = 0;
  let house = 1;
  let presents = 0;

  while (maxNoOfPresents < limit) {
    presents = presentsPerHouse(house);
    if (presents > maxNoOfPresents) { 
      maxNoOfPresents = presents;
    }
    if (maxNoOfPresents >= limit) { 
      return house;
    }
    ++house;
  }
}

function presentsPerHouse(houseNumber) {
  return _.reduce(factors(houseNumber), (memo, num) => memo + num * 10, 0);
}

function factors(number) {
  const smallDivisors = _.filter(_.range(1, Math.sqrt(number) + 1), d => number % d === 0);
  const largeDivisors = _.map(smallDivisors, d => number / d);
  return _.union(smallDivisors, largeDivisors).sort((a,b) => a - b);
}