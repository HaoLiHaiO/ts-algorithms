/**
 * Modified by Alexandre Pinel
 * 
 * Converted to Typescript
 * Fixed parseInt wrong typing
 * @todo add coverage for negative integers
 */
const BinaryConvert = (nb: number): number | TypeError => {
  const result = []

  if (nb < 0) {
    throw new Error('Negative integers not supported in this version.')
  } else {
    for (let i: number = nb; i > 0; i = parseInt(`${i / 2}`)) {
      result.push(i % 2) // push the value (remainder)to array
  } return Number(result.reverse().join(''))
    // reverse index of array as string ,join and change the type of value to become Number
  }


  }

export { BinaryConvert }