#!/usr/bin/python3

"""Thomas Bolaji"""
"""contains the function find_peak"""

def find_peak(list_of_integers):
    
    """finds a peak in a list of unsorted integers"""

    li = list_of_integers
    l = len(li)
    if l == 0:
        return
    n = l // 2
    if (n == l - 1 or li[n] >= li[n + 1]) and (n == 0 or li[n] >= li[n - 1]):
        return li[n]
    if n != l - 1 and li[n + 1] > li[n]:
        return find_peak(li[n + 1:])
    return find_peak(li[:n])
