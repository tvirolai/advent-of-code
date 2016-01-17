/* jshint node: true */

"use strict";

const fs = require("fs");
const _ = require("lodash");
const Combinatorics = require("js-combinatorics");

let cities = [];
let cmb;

fs.readFile("input.txt", "utf-8", (err, data) => {
  let map = [];
  data.split("\n").forEach(d => {
    let travel = [];
    travel.push(d.split(" to ")[0]);
    travel.push(d.split(" ")[2]);
    travel.push(Number(d.split(" = ")[1]));
    map.push(travel);
  });
  cities = _.filter(_.uniq(_.flatten(map)), d => isNaN(d));
  cmb = Combinatorics.permutation(cities).toArray();
  compute(map);
});

function compute(data) {
  let min;
  let max;
  for (let x = 0; x < cmb.length; x++) {
    let dist = 0;
    let permutation = cmb[x]; 
    for (let i = 0; i < permutation.length - 1; i++) {
      let route = [permutation[i], permutation[i + 1]].sort();
      for (let y = 0; y < data.length; y++) {
        if (_.isEqual(data[y].sort().slice(1), route)) {
          dist += data[y].sort()[0];
        }
      }
    }
    if (min === undefined) { min = dist; }
    if (max === undefined) { max = dist; }
    if (dist < min) {
      min = dist;
    } else if (dist > max) {
      max = dist;
    }
  }
  console.log("Min: " + min);
  console.log("Max: " + max);
}