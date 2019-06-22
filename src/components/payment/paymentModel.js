const factoryModel = require('../../database/factoryModel');
const factorySchema = require('../../database/factorySchema');

const payment = {
  value: {
    type: Number,
  },
  liquidValue: {
    type: Number,
  },
  plots: {
    type: Number,
  },
  originAccount: {
    type: Number,
  },
  destinyAccount: {
    type: Number,
  },
};

const paymentSchema = factorySchema(payment);
const Payment = factoryModel('Payment', paymentSchema);

module.exports = {
  paymentSchema,
  Payment,
};
