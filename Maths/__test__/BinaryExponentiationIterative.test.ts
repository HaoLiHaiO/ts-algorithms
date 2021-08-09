import { exponent } from '../BinaryExponentiationIterative'

describe('exponent', () => {
  it('returns 1 when power is 0', () => {
    expect(exponent(5, 0)).toBe(1)
  })

  it('returns 0 when base is 0', () => {
    expect(exponent(0, 7)).toBe(0)
  })

  it('returns the value of a base raised to a power', () => {
    expect(exponent(3, 5)).toBe(243)
  })
})
