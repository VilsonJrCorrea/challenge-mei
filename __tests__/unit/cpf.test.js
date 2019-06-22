const getCpfIsValid = require('../../src/validators/cpf');

describe('CPF', () => {
  it('Should return the cpf is valid', () => {
    const result = getCpfIsValid('949.261.870-27', '');
    expect(result).toBe(undefined);
  });

  it('Should return error, wrong CPF', () => {
    const result = getCpfIsValid('949.261.870-21', '');
    expect(result).toMatchObject({
      message: expect.stringContaining('inválido'),
    });
  });
});
