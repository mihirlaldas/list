import {add} from "./someComputation.test"

describe('addition works', () => {
  it('adding 1 + 2', () => {
    const expectedResult = 3
    const actualResult = add(1, 2)
    expect(actualResult).toEqual(expectedResult)
  })

  it('adding 2 + 3', () => {
    const expectedResult = 5
    const actualResult = add(2, 3)
    expect(actualResult).toEqual(expectedResult)
  })
})