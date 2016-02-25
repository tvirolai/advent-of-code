/* jshint node: true */

"use strict";

const fs = require("fs");
const _ = require("underscore");

fs.readFile("input.txt", "utf-8", (err, data) => {
  //part1(data);
  part2(data);
  //print(data);
});

function part1(data) {
  let numbers = _.filter(data.replace(/[^-|\d+]/g, " ").split(" "), d => d.length > 0);
  let sum = _.reduce(numbers, (memo, num) => memo + Number(num), 0);
  console.log("Part 1: " + sum);
}

function part2(data) {
  let processedData = "";
  data = JSON.stringify(data);
  for (let i = 0; i < data.length; i++) {
    if (data.substr(i, 3) === "red") {
      processedData += "red";
    } else if (data[i].match(/[-|\d|\{|\}|\[|\]]/)) {
      processedData += data[i];
    } else {
      processedData += " ";
    }
  }
  processedData = processedData.replace(/\s+/g, " ");
  removeRedObjects(processedData);
}

function removeRedObjects(string) {
  let data = string;
  let redI = data.indexOf("red");
  console.log(redI);
  console.log(data.length);
  if (redI === -1) {
    return data;
  }
  let parenthesis = {
    "openingIndex": 0,
    "closingIndex": 0,
    "curly": 0
  };

  // Find opening parenthesis ("[" or "{")
  for (let i = redI; i > 0; i--) {
    if (data[i] === "{") {
      parenthesis.openingIndex = i;
      parenthesis.curly = 1;
      break;
    } else if (data[i] === "[") {
      parenthesis.openingIndex = i;
      break;
    }
  }

  // Find closing parenthesis ("]" or "}")
  let closing = "";
  if (parenthesis.curly === 1) {
    closing = "}";
  } else {
    closing = "]";
  }

  let curlyCount = 0;
  let parenthesisCount = 0;

  for (let i = parenthesis.openingIndex; i < data.length - parenthesis.openingIndex; i++) {
    if (data[i] === "{") {
      ++curlyCount;
    } else if (data[i] === "[") {
      ++parenthesisCount;
    } else if (data[i] === "]") {
      --parenthesisCount;
    } else if (data[i] === "}") {
      --curlyCount;
    }
    console.log("Curly: " + curlyCount);
    console.log("parenthesis: " + parenthesisCount);
    if (curlyCount === 0 && parenthesis.curly === 1) {
      parenthesis.closingIndex = i;
      break;
    } else if (parenthesisCount === 0 && parenthesis.curly === 0) {
      parenthesis.closingIndex = i;
      break;
    }
  }

  if (parenthesis.closingIndex === 0) {
    console.log(data);
    console.log("Done!");
    return data;
  }

  // If an object with "red" was found, it is deleted
  if (parenthesis.curly === 1 && parenthesis.closingIndex > 0) {
    data = data.substr(0, parenthesis.openingIndex) + data.substr(parenthesis.closingIndex + 1);
    //console.log(data.length);
    //console.log(parenthesis);

  } else if (parenthesis.curly === 0 && parenthesis.closingIndex > 0) {
    data = data.substr(0, redI) + data.substr(redI + 3);
  }
}
