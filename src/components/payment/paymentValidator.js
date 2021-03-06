const Joi = require('joi');
const _ = require('lodash');

const schemaForNumber = require('../../validators/factoryOfSchemas/schemaForNumber');

const accountSchema = Joi.object().keys({
  value: schemaForNumber({ min: 0, messageMin: 'O valor minimo é zero' }),
  plots: schemaForNumber({ min: 1, messageMin: 'A quantidade minima de parcelas é um' }),
  originAccount: schemaForNumber({ min: 0, messageMin: 'O número da conta origem minímo é zero' }),
  destinyAccount: schemaForNumber({ min: 0, messageMin: 'O número da conta destino minímo é zero' }),
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
