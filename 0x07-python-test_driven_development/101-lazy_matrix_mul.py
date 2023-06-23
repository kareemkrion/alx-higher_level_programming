#!/usr/bin/python3
"""Thomas Bolaji"""
"""Defines a matrix multiplication function using NumPy."""
import numpy as np


def lazy_matrix_mul(m_t, m_b):
    """Return the multiplication of two matrices.
    Args:
        m_t (list of lists of ints/floats): The first matrix.
        m_b (list of lists of ints/floats): The second matrix.
    """

    return (np.matmul(m_t, m_b))
