/**
 * Modified by Alexandre Pinel
 * 
 * Converted to Typescript
 * Fixed parseInt wrong typing
 * @todo add coverage for negative integers
 */
const BinaryConvert = (nb: number) => {
  const result = []

  if (nb < 0) throw 'Only positive integers are covered in this version.'

  for (let i: number = nb; i > 0; i = parseInt(`${i / 2}`)) {
    result.push(i % 2) // push the value (remainder)to array
  } return Number(result.reverse().join(''))
  // reverse index of array as string ,join and change the type of value to become Number
}
// call function and value as parameter to passing the value
export { BinaryConvert }