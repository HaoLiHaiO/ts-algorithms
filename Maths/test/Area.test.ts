import * as area from '../Area'

describe('Testing surfaceAreaCube calculations', () => {
  it('returns valid values with valid arguments', () => {
    expect(area.surfaceAreaCube(1.2)).toBe(8.64)
    expect(area.surfaceAreaCube(3)).toBe(54)
  })
  it('throws if arguments are not valid', () => {
    expect(() => area.surfaceAreaCube(-1)).toThrow()
  })
})
describe('Testing surfaceAreaSphere calculations', () => {
  it('returns correct value with correct arguments', () => {
    expect(area.surfaceAreaSphere(5)).toBe(314.1592653589793)
  })
  it('throws with if arguments are not valid', () => {
    expect(() => area.surfaceAreaSphere(-1)).toThrow()
  })
})
describe('Testing areaRectangle calculations', () => {
  it('returns correct value with valid arguments', () => {
    expect(area.areaRectangle(2.5, 2)).toBe(5.0)
  })
  it('throws with invalid arguments', () => {
    expect(() => area.areaRectangle(-1, 20)).toThrow()
    expect(() => area.areaRectangle(23, -1)).toThrow()
  })
})
describe('Testing areaSquare calculations', () => {
  it('returns correct value with valid arguments', () => {
    const areaSquare = area.areaSquare(2.5)
    expect(areaSquare).toBe(6.25)
  })
  it('throws with invalid arguments', () => {
    expect(() => area.areaSquare(-1)).toThrow()
  })
})
describe('Testing areaTriangle calculations', () => {
  it('returns correct value with valid arguments', () => {
    const areaTriangle = area.areaTriangle(1.66, 3.44)
    expect(areaTriangle).toBe(2.8552)
  })
  it('null with invalid arguments', () => {
    expect(() => area.areaTriangle(-1, 1)).toThrow()
  })
})
describe('Testing areaParallelogram calculations', () => {
  it('returns correct value with valid arguments', () => {
    expect(area.areaParallelogram(1.66, 3.44)).toBe(5.7104)
  })
  it('null with invalid arguments', () => {
    expect(() => area.areaParallelogram(-1, 1)).toThrow()
  })
})
describe('Testing areaTrapezium calculations', () => {
  it('returns correct value with valid arguments', () => {
    expect(area.areaTrapezium(1.66, 2.41, 4.1)).toBe(8.3435)
  })
  it('null with invalid arguments', () => {
    expect(() => area.areaTrapezium(-1, 1, 0)).toThrow()
  })
})
describe('Testing areaCircle calculations', () => {
  it('returns correct value with valid arguments', () => {
    expect(area.areaCircle(3.456)).toBe(37.52298159254666)
  })
  it('throws with invalid arguments', () => {
    expect(() => area.areaCircle(-1)).toThrow()
  })
})
describe('Testing areaRhombus calculations', () => {
  it('returns correct value with valid arguments', () => {
    expect(area.areaRhombus(2.5, 2.0)).toBe(2.5)
  })
  it('null with invalid arguments', () => {
    expect(() => area.areaRhombus(7, -1)).toThrow()
  })
})
