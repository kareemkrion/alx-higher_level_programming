#!/usr/bin/node

const Dict = require('./101-data').dict;
const NewDict = {};

Object.keys(Dict).map(function (key) {
  if (!Array.isArray(NewDict[Dict[key]])) {
    NewDict[Dict[key]] = [];
  }
  NewDict[Dict[key]].push(key);
});

console.log(NewDict);
