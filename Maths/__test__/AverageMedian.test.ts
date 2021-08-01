import { averageMedian } from '../AverageMedian'

describe('Average median', () => {
  it('returns the median of a sorted array of numbers with five items', () => {
    expect(averageMedian([1, 2, 6, 4, 5])).toStrictEqual(4)
  })

  it('returns the median of an unsorted array of numbers with seven items', () => {
    expect(averageMedian([8, 9, 1, 2, 5, 10, 11])).toStrictEqual(8)
  })

  it('returns the median of an array which contains negative numbers', () => {
    expect(averageMedian([8, -9, 1, -2, 5, -10, 11])).toStrictEqual(1)
  })
})
