const { Release } = require('./releaseModel');

async function findAll() {
  return Release.find();
}

async function findOne(id) {
  return Release.findOne(id);
}

async function create(object) {
  return Release.create(object);
}

async function findOneAndUpdate(id, object) {
  return Release.findOneAndUpdate(id, object, { new: true });
}

async function findOneAndRemove(id) {
  return Release.findByIdAndRemove(id);
}

module.exports = {
  findAll, findOne, findOneAndUpdate, findOneAndRemove, create,
};
