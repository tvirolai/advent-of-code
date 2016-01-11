/* jshint node: true */

"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  let replacements = [];
  let molecule = "";
  data.split("\n").forEach((line) => {
    if (line.indexOf("=>") > -1) {
      replacements.push([line.split("=>")[0].trim(), line.split("=>")[1].trim()]);
    } else if (line.length > 1) {
      molecule += line;
    }
  });
  allReplacements(replacements, molecule);
});

function allReplacements(replacements, molecule) {
  let molecules = [];
  while (replacements.length > 0) {
    molecules.push(moleculesForOneReplacement(replacements.pop(), molecule));
  }
  console.log(_.uniq(_.flatten(molecules, true)).length);
}

function moleculesForOneReplacement(replacement, molecule) {
  let molecules = [];
  const splitMolecule = molecule.split(replacement[0]);
  for (let i = 1; i < splitMolecule.length; i++) {
    molecules.push(splitMolecule.slice(0,i).join(replacement[0]).concat(replacement[1]).concat(splitMolecule.slice(i).join(replacement[0])));
  }
  return molecules;
}