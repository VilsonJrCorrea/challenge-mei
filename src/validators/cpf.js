module.exports = function (c, name) {
  const invalid = { message: `O CPF ${name} inválido` };
  var Soma;
  var Resto;

  if (!c) return invalid;

  if (c.length > 11) {
    c = c.replace(/[.]+/gm, '');
    c = c.replace(/[-]+/gm, '');
  }

  if (c.length < 11) return invalid;

  Soma = 0;
  if (c == '00000000000') return invalid;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(c.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(c.substring(9, 10))) return invalid;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(c.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(c.substring(10, 11))) return invalid;
  return;
};
