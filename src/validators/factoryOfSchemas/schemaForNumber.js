const Joi = require('joi');

module.exports = function ({ min, messageMin }) {
  return Joi
    .number()
    .min(min)
    .error(errors => errors.map((err) => {
      switch (err.type) {
      case 'number.min':
        return { message: messageMin };
      default:
      }
    }));
};
