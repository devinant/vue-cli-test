import { SimpleCalculatorService, CalculatorOperation } from '@/services/SimpleCalculatorService';

describe('getOperationForOperationKind', () => {
  it('should return 2 when using addition given (1, 1)', () => {
    expect(new SimpleCalculatorService(CalculatorOperation.Addition).calculate(1, 1)) //
      .toEqual(2);
  });

  it('should return 10 when using subtraction given (20, 10) when using', () => {
    expect(new SimpleCalculatorService(CalculatorOperation.Subtraction).calculate(20, 10)) //
      .toEqual(10);
  });

  it('should return 100 when using multiply given (10, 10)', () => {
    expect(new SimpleCalculatorService(CalculatorOperation.Multiply).calculate(10, 10)) //
      .toEqual(100);
  });

  it('should return 5 when using divide given (10, 2)', () => {
    expect(new SimpleCalculatorService(CalculatorOperation.Divide).calculate(10, 2)) //
      .toEqual(5);
  });
});
