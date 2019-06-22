const generatorNumberOfAccounts = require('../../src/helpers/generatorNumberOfAccounts');

describe('Number of account', () => {
  it('Should return the number account is valid', () => {
    const result = generatorNumberOfAccounts();
    expect(result.toString().length).toBe(4);
  });
});
