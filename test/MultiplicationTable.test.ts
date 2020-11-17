import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  // it('should render return nothing when multiplication table of (1, 1)', () => {
  //   // given
  //   const table = new MultiplicationTable()
  //   const start = 10
  //   const end = 9

  //   //when
  //   const rendered = table.render(start, end)

  //   //then
  //   expect(rendered).toBe('')
  // })

  it('should render in range [1, 10] when multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('The input number over the range scope [1, 10]')
  })

})
