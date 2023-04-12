#!/usr/bin/node

// Converts a number from base 10 to another base passed as argument
// with Closure

exports.converter = function (base) {
  function myConverter (m) {
    return m.toString(base);
  }

  return myConverter;
};
