/* jshint node: true */

"use strict";

const _ = require("underscore");
const limit = 33100000;

console.log("Part 1: " + calculateResult(1));
console.log("Part 2: " + calculateResult(2));

function calculateResult(part) {
  let house = 1;
  let presents = 0;

  while (true) {
    presents = (part === 1) ? presentsPerHouse1(house) : presentsPerHouse2(house);
    if (presents >= limit) {
      return house;
    }
    ++house;
  }
}

function presentsPerHouse1(houseNumber) {
  return _.reduce(factors(houseNumber), (memo, num) => memo + num * 10, 0);
}

function presentsPerHouse2(houseNumber) {
  const filteredFactors = _.filter(factors(houseNumber), factor => houseNumber / 50 <= factor);
  return _.reduce(filteredFactors, (memo, num) => memo + num * 11, 0);
}

function factors(number) {
  const smallDivisors = _.filter(_.range(1, Math.sqrt(number) + 1), d => number % d === 0);
  const largeDivisors = _.map(smallDivisors, d => number / d);
  return _.union(smallDivisors, largeDivisors).sort((a,b) => a - b);
}