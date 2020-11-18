export class Expression {
    firstFactor: number
    secondFactor: number
    product: number

    constructor(firstFactor: number, secondFactor: number) {
      this.firstFactor = firstFactor
      this.secondFactor = secondFactor
      this.product = this.firstFactor * this.secondFactor
    }
}
