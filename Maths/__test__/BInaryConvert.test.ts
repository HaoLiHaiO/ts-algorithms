import { BinaryConvert } from '../BinaryConvert'

describe('Binary Convert', () => {
  it('returns the correct value', () => {
    expect(BinaryConvert(12)).toBe(1100)
  })
  it('returns the correct value of the sum from two numbers', () => {
    expect(BinaryConvert(12 + 2)).toBe(1110)
  })
  it('throws an error for negative numbers', () => {
    expect(() => BinaryConvert(-18)).toThrow('Negative integers not supported in this version.')
  })
})
