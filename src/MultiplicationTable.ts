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

  public render(start: number, end: number): string {
    if(this.isStartGreaterThanEnd(start, end))  return ''
    if(!this.isValidRange(start, end)) return 'The input number over the range scope [1, 10]'
    return '1*1=1'
  }


}
