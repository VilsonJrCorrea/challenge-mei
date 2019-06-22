
const paymentDao = require('./paymentDao');
const accountDao = require('../account/accountDao');
const {
  messageNotFound,
  messageOriginAccountNotFound,
  messageDestinyAccountNotFound,
  messageDestinyEqualOrigin,
} = require('./paymentMessages');
const { validate } = require('./paymentValidator');
const calculateLiquidValue = require('../../helpers/calculateLiquidValue');

async function get(req, res) {
  const result = await paymentDao.findAll();
  res.send(result);
}

async function getById(req, res) {
  const { id } = req.params;
  const result = await paymentDao.findOne({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}

async function post(req, res) {
  const paymentReq = req.body;
  if (paymentReq.destinyAccount === paymentReq.originAccount) {
    return res.status(400).send(messageDestinyEqualOrigin);
  }
  const messageReturn = validate(paymentReq);
  if (messageReturn) return res.status(400).send(messageReturn);
  const liquidValue = calculateLiquidValue(paymentReq.value, paymentReq.plots);
  paymentReq.liquidValue = liquidValue;

  const originAccount = await accountDao.findOne({ number: paymentReq.originAccount });
  if (!originAccount) return res.status(404).send(messageOriginAccountNotFound);
  const destinyAccount = await accountDao.findOne({ number: paymentReq.destinyAccount });
  if (!destinyAccount) return res.status(404).send(messageDestinyAccountNotFound);

  const { _id: idOriginAccount, balance: balanceOfOriginAccount } = originAccount;
  originAccount.balance = balanceOfOriginAccount - liquidValue;
  await accountDao.findOneAndUpdate({ _id: idOriginAccount }, originAccount);

  const { _id: idDestinyAccount, balance: balanceOfDestinyAccount } = destinyAccount;
  destinyAccount.balance = balanceOfDestinyAccount + paymentReq.value;
  await accountDao.findOneAndUpdate({ _id: idDestinyAccount }, destinyAccount);

  const payment = await paymentDao.create(paymentReq);
  res.send({ status: 200, payment });
}

async function remove(req, res) {
  const { id } = req.params;
  const result = await paymentDao.findOneAndRemove({ _id: id });
  if (!result) return res.status(404).send(messageNotFound);
  res.send(result);
}


module.exports = {
  get, getById, post, remove,
};
