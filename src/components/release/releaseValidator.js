const Joi = require('joi');
const _ = require('lodash');
const schemaForNumber = require('../../validators/factoryOfSchemas/schemaForNumber');
const schemaForString = require('../../validators/factoryOfSchemas/schemaForString');

const accountSchema = Joi.object().keys({
  value: schemaForNumber({ min: 0, messageMin: 'O valor minimo é zero' }),
  plots: schemaForNumber({ min: 0, messageMin: 'A quantidade minimo de parcelas é zero' }),
  originAccount: schemaForNumber({ min: 0, messageMin: 'O número da conta origem minímo é zero' }),
  destinyAccount: schemaForNumber({ min: 0, messageMin: 'O número da conta destino minímo é zero' }),
  date: schemaForString({
    min: 8,
    max: 8,
    messageMin: 'Data necessita ter pelo menos 8 caracteres',
    messageMax: 'O número máximo de caracteres para data é 8',
    messageEmpty: 'Data não pode ser vazio',
  }),
});

function validateBody(account) {
  const { error } = Joi.validate(account, accountSchema, { abortEarly: false });
  if (error) return { messages: error.details };
}

function validate(body) {
  let messages = [];
  const resultBody = validateBody(body);
  if (resultBody) messages = _.concat(messages, resultBody.messages);
  if (messages.length > 0) return { messages };
}

module.exports = { validate };
