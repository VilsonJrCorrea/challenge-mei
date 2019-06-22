const factoryModel = require('../../database/factoryModel');
const factorySchema = require('../../database/factorySchema');

const account = {
  cpf: {
    type: String,
  },
  number: {
    type: Number,
  },
  balance: {
    type: Number,
  },
};

const accountSchema = factorySchema(account);
const Account = factoryModel('Account', accountSchema);

module.exports = {
  accountSchema,
  Account,
};
