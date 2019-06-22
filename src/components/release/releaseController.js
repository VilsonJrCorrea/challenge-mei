
const releaseDao = require('./releaseDao');
const { messageNotFound } = require('./releaseMessages');
const { validate } = require('./releaseValidator');

async function get(req, res) {
  const result = await releaseDao.findAll();
  res.send(result);
}

async function getById(req, res) {
  const { id } = req.params;
  const result = await releaseDao.findOne({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}

async function post(req, res) {
  const releaseReq = req.body;
  const messageReturn = validate(releaseReq);
  if (messageReturn) return res.status(400).send(messageReturn);
  const release = await releaseDao.create(releaseReq);
  res.send(release);
}

async function put(req, res) {
  const { id } = req.params;
  const releaseReq = req.body;
  const release = await releaseDao.findOne({ _id: id });
  if (!release) return res.status(404).send(messageNotFound);

  const messageReturn = validate(releaseReq);
  if (messageReturn) return res.status(400).send(messageReturn);

  const mergedRelease = _.merge(release, releaseReq);
  const newRelease = await releaseDao.findOneAndUpdate({ _id: id }, mergedRelease);

  res.send(newRelease);
}

async function remove(req, res) {
  const { id } = req.params;
  const result = await releaseDao.findOneAndRemove({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}


module.exports = {
  get, getById, post, put, remove,
};
