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

  it('should render return nothing when multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 10
    const end = 9

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

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

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })

  // it('should render multiplication table of (8, 10)', () => {
  //   // given
  //   const table = new MultiplicationTable()
  //   const start = 8
  //   const end = 10

  //   //when
  //   const rendered = table.render(start, end)

  //   //then
  //   expect(rendered).toBe('8*8=64\n8*9=72   9*9=81\n8*10=80  9*10=90  10*10=100')
  // })


})
