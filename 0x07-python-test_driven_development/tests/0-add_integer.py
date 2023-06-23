#!/usr/bin/python3
"""
Thomas Bolaji
This is the "0-add_integer" module.
The 0-add_integer module supplies one function, add_integer(a, b).
"""


def add_integer(m, b):
    """Return the addition of two numbers."""
    if type(m) is not int and type(m) is not float:
        raise TypeError("m must be an integer")
    if type(b) is not int and type(b) is not float:
        raise TypeError("b must be an integer")
    if type(m) is float:
        a = int(m)
    if type(b) is float:
        b = int(b)
    return a + b
