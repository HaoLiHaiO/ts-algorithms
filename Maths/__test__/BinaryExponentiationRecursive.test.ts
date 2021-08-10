import { binaryExponentiation } from '../BinaryExponentiationRecursive'

describe('Binary Exponentiation Recursive', () => {
    it('returns correct value', () => {
        expect(binaryExponentiation(2, 10)).toStrictEqual(1024)
    })

    it('returns correct value', () => {
        expect(binaryExponentiation(3, 9)).toStrictEqual(19683)
    })
})