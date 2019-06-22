const Joi = require('joi');
const _ = require('lodash');

const getCpfIsValid = require('../../validators/cpf');
const schemaForNumber = require('../../validators/factoryOfSchemas/schemaForNumber');

const accountSchema = Joi.object().keys({
  cpf: Joi.string(),
  number: schemaForNumber({ min: 0, messageMin: 'O número minino da conta é zero' }),
  balance: Joi.number(),
});

function validateBody(account) {
  const { error } = Joi.validate(account, accountSchema, { abortEarly: false });
  if (error) return { messages: error.details };
}

function validate(body) {
  let messages = [];
  const resultBody = validateBody(body);
  if (resultBody) messages = _.concat(messages, resultBody.messages);
  const resultCpf = getCpfIsValid(body.cpf, 'conta corrente');
  if (resultCpf) messages = _.concat(messages, resultCpf);
  if (messages.length > 0) return { messages };
}

module.exports = { validate };
