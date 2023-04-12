#!/usr/bin/node

exports.esrever = function (list) {
  const revList = [];

  for (let b = list.length - 1; b >= 0; --b) {
    revList.push(list[b]);
  }

  return revList;
};
