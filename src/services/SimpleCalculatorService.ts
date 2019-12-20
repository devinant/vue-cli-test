interface Operations {
  [operation: string]: {
    (operands: number[]): number;
  };
}

export enum CalculatorOperation {
  Addition = '+',
  Subtraction = '-',
  Multiply = '*',
  Divide = '/'
}

export class SimpleCalculatorService {
  private operations: Operations = {
    [CalculatorOperation.Addition]: ([a, b]) => a + b,
    [CalculatorOperation.Subtraction]: ([a, b]) => a - b,
    [CalculatorOperation.Multiply]: ([a, b]) => a * b,
    [CalculatorOperation.Divide]: ([a, b]) => a / b
  };

  constructor(private readonly calculatorOperation: CalculatorOperation) {}

  calculate(...operands: number[]): number {
    return this.operations[this.calculatorOperation](operands);
  }
}
