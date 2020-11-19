import { Expression } from './Expression'

export class MultiplicationTable {
  private isStartGreaterThanEnd(start: number, end: number): boolean {
    return start > end
  }
  private isInRange(number: number) {
    const startNumber = 1
    const endNumber = 10
    if(number >= startNumber && number <= endNumber) return true
    return false
  }
  private isValidRange(start: number, end: number): boolean {
    return this.isInRange(start) && this.isInRange(end)
  }

  private buildExpressions(start: number, end: number): Expression[][] {
    /*
     (2, 2), (    ), (    )
     (2, 3), (3, 3), (    )
     (2, 4), (3, 4), (4, 4)
     ()中第一个元素按列增加，第二个元素按行不变
    */
    // 初始化二维数组
    const expressions: Expression[][] = []
    for(let i = 0; i <= end - start; i++) {   // 遍历每一行
      const expression: Expression[] = []  // 创建并初始化一个数组放每一行的元素
      for(let j = 0; j <= i; j++) {   // 遍历指定行的所有元素
        const firstNumber = start + j
        const secondNumber = start + i
        const expressionInstance = new Expression(firstNumber, secondNumber)
        expression.push(expressionInstance)
      }
      expressions.push(expression)
    }
    /*
        const start = equations[0][0].factor1
        const width: number[] = equations[equations.length - 1].map(({firstFactor, secondFactor, product}) => {
          return `${factor1}&${factor2}=${product}`.length
        })
        expressions.map( row => row.map( ({factor1, factor2, product}) => {
          const col = factor1 - start
          const spacing = '  '.repeat(width[col] - equation.length)  列宽
          return
        }


        )
    */
    return expressions
  }

  // private output(expression: Expression): string
  // {
  //     const expressions = this.buildExpressions(start, end)
  //     const result =
  // }

  public render(start: number, end: number): string {
    if(this.isStartGreaterThanEnd(start, end))  return ''
    if(!this.isValidRange(start, end)) return 'The input number over the range scope [1, 10]'
    const expressions = this.buildExpressions(start, end)
    // destructing  (这个写法还需要理解一下)
    const rendered = expressions.map(row => row.map(({firstFactor, secondFactor, product}) => `${firstFactor}*${secondFactor}=${product}`).join('  ')).join('\n')
    // console.log(rendered)
    // console.log(rendered.length)
    return rendered
  }
}

// let item = new MultiplicationTable()
// item.render(1,2)
