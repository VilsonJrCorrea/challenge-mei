require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
require('../database/');
const { Account } = require('../components/account/accountModel');
const { Payment } = require('../components/payment/paymentModel');
const { Release } = require('../components/release/releaseModel');
const generatorNumberOfAccount = require('../helpers/generatorNumberOfAccounts');
const { findAll } = require('../components/account/accountDao');

async function run() {
  for (let i = 0; i < 10; i += 1) {
    Account.create({
      cpf: '122.179.880-42',
      number: generatorNumberOfAccount(),
      balance: 1234,
    });
  }
  const accounts = await findAll();

  await Promise.all(accounts.map(async (account, index) => {
    let destinyNumber;
    while (!destinyNumber || index === destinyNumber) {
      destinyNumber = Math.floor(Math.random() * accounts.length);
    }
    await Payment.create({
      value: 1,
      plots: 1,
      originAccount: account.number,
      destinyAccount: accounts[destinyNumber].number,
    });

    await Release.create({
      value: 1,
      plots: 1,
      originAccount: account.number,
      destinyAccount: accounts[destinyNumber].number,
      date: '10/10/10',
    });
  }));
  console.log("Seed created with success");
  process.exit();
}

run();
