const _ = require('lodash');
const accountDao = require('./accountDao');
const { messageNotFound } = require('./accountMessages');
const { validate } = require('./accountValidator');
const generatorNumberOfAccount = require('../../helpers/generatorNumberOfAccounts');

async function get(req, res) {
  const result = await accountDao.findAll();
  res.send(result);
}

async function getById(req, res) {
  const { id } = req.params;
  const result = await accountDao.findOne({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}

async function post(req, res) {
  const accountReq = req.body;
  const messageReturn = validate(accountReq);
  if (messageReturn) return res.status(400).send(messageReturn);
  accountReq.number = generatorNumberOfAccount();
  const account = await accountDao.create(accountReq);
  res.send(account);
}

async function put(req, res) {
  const accountReq = req.body;
  const { id } = req.params;
  let account = await accountDao.findOne({ _id: id });
  if (!account) return res.status(404).send(messageNotFound);

  const messageReturn = validate(accountReq);
  if (messageReturn) return res.status(400).send(messageReturn);

  const newObject = _.merge(account, accountReq);
  account = await accountDao.findOneAndUpdate({ _id: id }, newObject);
  res.send(account);
}

async function remove(req, res) {
  const { id } = req.params;
  const result = await accountDao.findOneAndRemove({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}


module.exports = {
  get, getById, post, put, remove,
};
