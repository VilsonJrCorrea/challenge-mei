const { Account } = require('./accountModel');

async function findAll() {
  return Account.find();
}

async function findOne(id) {
  return Account.findOne(id);
}

async function create(object) {
  return Account.create(object);
}

async function findOneAndUpdate(id, object) {
  return Account.findOneAndUpdate(id, object, { new: true });
}

async function findOneAndRemove(id) {
  return Account.findByIdAndRemove(id);
}

module.exports = {
  findAll, findOne, findOneAndUpdate, findOneAndRemove, create,
};
