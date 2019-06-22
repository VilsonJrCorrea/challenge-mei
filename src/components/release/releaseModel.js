const factoryModel = require('../../database/factoryModel');
const factorySchema = require('../../database/factorySchema');

const release = {
  value: {
    type: Number,
  },
  plots: {
    type: Number,
  },
  originAccout: {
    type: Number,
  },
  destinyAccount: {
    type: Number,
  },
  data: {
    type: Date,
    default: Date.now,
  },
};

const releaseSchema = factorySchema(release);
const Release = factoryModel('Release', releaseSchema);

module.exports = {
  releaseSchema,
  Release,
};
