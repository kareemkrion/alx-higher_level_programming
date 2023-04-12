#!/usr/bin/node

// Prints a Rectangle with the parameters passed

module.exports = class Rectangle {
  constructor (width, height) {
    if (typeof width === 'number' && typeof height === 'number' && width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  print () {
    for (let a = 0; a < this.height; ++i) {
      let b = 0;

      for (; b < this.width; ++b) {
        process.stdout.write('X');
      }

      if (b === this.width) {
        console.log('');
      }
    }
  }
};
