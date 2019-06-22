const { Payment } = require('./paymentModel');

async function findAll() {
  return Payment.find();
}

async function findOne(id) {
  return Payment.findOne(id);
}

async function create(object) {
  return Payment.create(object);
}

async function findOneAndUpdate(id, object) {
  return Payment.findOneAndUpdate(id, object, { new: true });
}

async function findOneAndRemove(id) {
  return Payment.findByIdAndRemove(id);
}

module.exports = {
  findAll, findOne, findOneAndUpdate, findOneAndRemove, create,
};