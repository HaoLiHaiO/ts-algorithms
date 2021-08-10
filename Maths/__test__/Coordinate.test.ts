import * as coordinate from '../Coordinate'

describe('Testing distance2points calculations', () => {
  it('Should give a numeric output (distance between 2 points) with 4 numeric arguments', () => {
    const distance2points = coordinate.distance2points(2, 2, -10, -7)
    expect(distance2points).toBe(15)
  })
})
