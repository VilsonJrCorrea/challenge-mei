const factoryModel = require('../../database/factoryModel');
const factorySchema = require('../../database/factorySchema');

const release = {
  value: {
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
  date: {
    type: String,
  },
};

const releaseSchema = factorySchema(release);
const Release = factoryModel('Release', releaseSchema);

module.exports = {
  releaseSchema,
  Release,
};
