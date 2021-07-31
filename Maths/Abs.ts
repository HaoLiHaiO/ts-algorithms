/*
  Modified by Alexandre Pinel

    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/abs.py

    This script will find the absolute value of a number.

    More about absolute values:
        https://en.wikipedia.org/wiki/Absolute_value
*/

/**
 * Returns absolute value
 */
export const absVal = (num: number): number => {
  return num < 0 ? -num : num
}
