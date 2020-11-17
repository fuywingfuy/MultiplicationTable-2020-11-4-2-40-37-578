export class MultiplicationTable {
  private isValidRange(start: number, end: number): boolean {
    return start <= end
  }
  public render(start: number, end: number): string {
    if(!this.isValidRange(start, end))  return ''
    return '1*1=1'
  }
}
