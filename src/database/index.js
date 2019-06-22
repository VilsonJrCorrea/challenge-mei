const mongoose = require('mongoose');

module.exports = function (dbUrl) {
  return mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log(`Connected to Db ${dbUrl}`))
    .catch(err => console.error('Could not connect ', err));
};
