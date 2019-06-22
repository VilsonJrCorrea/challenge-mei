const Joi = require('joi');

module.exports = function ({
  min, max, messageMin, messageMax, messageEmpty,
}) {
  return Joi.string()
    .min(min)
    .max(max)
    .error(errors => errors.map((err) => {
      switch (err.type) {
      case 'string.min':
        return { message: messageMin };
      case 'any.empty':
        return { message: messageEmpty };
      case 'string.max':
        return { message: messageMax };
      default:
      }
    }));
};
