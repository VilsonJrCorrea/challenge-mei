const mongoose = require('mongoose');

module.exports = function (object) {
  return new mongoose.Schema(object);
};
