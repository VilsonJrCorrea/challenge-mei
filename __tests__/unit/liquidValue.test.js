const calculateLiquidValue = require('../../src/helpers/calculateLiquidValue');

describe('Liquid value', () => {
  it('Should return the value calculated of liquid value', () => {
    const result = calculateLiquidValue(10, 10);
    expect(result).toBe(31.7);
  });

  it('Should return undefined with negative values', () => {
    const result = calculateLiquidValue(-10, -10);
    expect(result).toBe(undefined);
  });
});
