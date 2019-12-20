const OperationType = {
  Addition: 1,
  Subtraction: 2,
  Multiplication: 3,
  Division: 4
};

const setOperands = (firstOperand, secondOperand) => {
  cy.get('[data-cy="firstValue"]')
    .clear()
    .type(`${firstOperand}`);

  cy.dataCy('secondValue')
    .clear()
    .type(`${secondOperand}`);
};

const selectOperation = operation => {
  cy.get('.v-select__selections').click();
  cy.get(`[role="option"]:nth-child(${operation})`).click();
};

const expectOperationResult = operationResult => {
  cy.contains('[data-cy="result"]', operationResult);
};

describe('Simple Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can perform addition', () => {
    selectOperation(OperationType.Addition);
    setOperands(10, 20);
    expectOperationResult('30');

    selectOperation(OperationType.Subtraction);
    expectOperationResult('-10');

    selectOperation(OperationType.Multiplication);
    expectOperationResult('200');

    selectOperation(OperationType.Division);
    expectOperationResult('0.5');

    selectOperation(OperationType.Division);
    setOperands(10, 0);
    expectOperationResult('Infinity');

    selectOperation(OperationType.Division);
    setOperands(undefined, undefined);
    expectOperationResult('NaN');
  });
});
