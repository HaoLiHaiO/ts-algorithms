/*
  Modified from:
    https://github.com/TheAlgorithms/Python/blob/master/maths/binary_exponentiation.py

  Explaination:
    https://en.wikipedia.org/wiki/Exponentiation_by_squaring
*/

const binaryExponentiation = (a: number, n: number): number => {
  if (n === 0) {
    return 1
  } else if (n % 2 === 1) {
    return binaryExponentiation(a, n - 1) * a
  } else {
    const b = binaryExponentiation(a, n / 2)
    return b * b
  }
}
