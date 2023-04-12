#!/usr/bin/node

// - Rotate and Double the width and height of the Rectangle

module.exports = class Rectangle {
  constructor (width, height) {
    if (typeof width === 'number' && typeof height === 'number' && width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  print (char = 'X') {
    for (let a = 0; a < this.height; ++a) {
      let b = 0;

      for (; b < this.width; ++b) {
        process.stdout.write(char);
      }

      if (b === this.width) {
        console.log('');
      }
    }
  }

  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
};
