import { mean } from '../AverageMean'

describe('Tests for average mean', () => {
  it('returns the mean of an array of numbers', () => {
    expect(mean([1, 2, 4, 5])).toStrictEqual(3)
  })

  it('works with negative items too', () => {
    expect(mean([-18, -48, -69, -27])).toStrictEqual(-40.5)
  })
})
