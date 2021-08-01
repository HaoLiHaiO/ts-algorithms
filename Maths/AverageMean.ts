/*
  Modified by Alexandre Pinel - converted to Typescript

    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/average.py

    This script will find the average (mean) of an array of numbers.

    More about mean:
        https://en.wikipedia.org/wiki/Mean
*/

/**
 * Returns the average of an array of number - sum of all its numbers divided
 * by its number of items
 */
const mean = (nums: number[]): number => {
  let sum = 0

  nums.forEach(current => sum += current)

  const avg = sum / nums.length
  return avg
}

export { mean }
