import { Expression } from './Expression'

function buildExpressions(start: number, end: number): Expression[][] {
  /*
     (2, 2), (    ), (    )
     (2, 3), (3, 3), (    )
     (2, 4), (3, 4), (4, 4)
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
  return expressions
}

const expressions = buildExpressions(2, 4)
const rendered = expressions.map(row => row.map(({firstFactor, secondFactor, product}) => `${firstFactor}*${secondFactor}=${product}`).join('  ')).join('\n')
console.log(rendered)
