#!/usr/bin/node

// Print function with custom characters to represent the Square

const OldSquare = require('./5-square');

module.exports = class Square extends OldSquare {
  constructor (size) {
    super(size, size);
  }

  double () {
    super.double();
  }

  charPrint (b = 'X') {
    super.print(b);
  }
};
