
const releaseDao = require('./releaseDao');
const accountDao = require('../account/accountDao');
const {
  messageNotFound,
  messageOriginAccountNotFound,
  messageDestinyAccountNotFound,
  messageDestinyEqualOrigin,
} = require('./releaseMessages');
const { validate } = require('./releaseValidator');
const calculateLiquidValue = require('../../helpers/calculateLiquidValue');

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
  if (releaseReq.destinyAccount === releaseReq.originAccount) {
    return res.status(400).send(messageDestinyEqualOrigin);
  }
  const messageReturn = validate(releaseReq);
  if (messageReturn) return res.status(400).send(messageReturn);
  const liquidValue = calculateLiquidValue(releaseReq.value, releaseReq.plots);
  releaseReq.liquidValue = liquidValue;

  const originAccount = await accountDao.findOne({ number: releaseReq.originAccount });
  if (!originAccount) return res.status(404).send(messageOriginAccountNotFound);
  const destinyAccount = await accountDao.findOne({ number: releaseReq.destinyAccount });
  if (!destinyAccount) return res.status(404).send(messageDestinyAccountNotFound);

  const { _id: idOriginAccount, balance: balanceOfOriginAccount } = originAccount;
  originAccount.balance = balanceOfOriginAccount - liquidValue;
  await accountDao.findOneAndUpdate({ _id: idOriginAccount }, originAccount);

  const { _id: idDestinyAccount, balance: balanceOfDestinyAccount } = destinyAccount;
  destinyAccount.balance = balanceOfDestinyAccount + releaseReq.value;
  await accountDao.findOneAndUpdate({ _id: idDestinyAccount }, destinyAccount);

  const release = await releaseDao.create(releaseReq);
  res.send({ status: 200, release });
}

async function remove(req, res) {
  const { id } = req.params;
  const result = await releaseDao.findOneAndRemove({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}


module.exports = {
  get, getById, post, remove,
};
