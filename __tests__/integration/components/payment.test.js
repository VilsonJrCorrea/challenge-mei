const request = require('supertest');
const app = require('../../../src/components/index')
require('../../../src/database');
const { Payment } = require('../../../src/components/payment/paymentModel');
const { Account } = require('../../../src/components/account/accountModel');
const generatorNumberOfAccount = require('../../../src/helpers/generatorNumberOfAccounts');

const apiEndpoint = '/api/payments/'

const objectPayment = {
  value: 1,
  plots: 1,
  originAccount: 1111,
  destinyAccount: 2222,
}

const originAccount = {
  cpf: "122.179.880-42",
  number: 1111,
  balance: 1234
}

const destinyAccount = {
  cpf: "122.179.880-42",
  number: 2222,
  balance: 1234
}

describe("Payment", () => {
  afterAll(async () => {
    await Payment.remove({});
  })

  it("Should GET all payments", async () => {
    const res = await request(app).get(apiEndpoint);
    expect(res.status).toBe(200);
  });

  it("Should GET a payment", async () => {
    const payment = await Payment.create(objectPayment);
    const response = await request(app).get(apiEndpoint + payment._id);
    expect(response.status).toBe(200);
  });

  it("Should POST a payment", async () => {
    await Account.create(originAccount);
    await Account.create(destinyAccount);

    const response = await request(app)
      .post(apiEndpoint)
      .send(objectPayment);
    expect(response.status).toBe(200);
  });

  it("Should POST a payment empty and return error", async () => {
    const emptyPayment = {};
    const response = await request(app)
      .post(apiEndpoint)
      .send(emptyPayment);
    expect(response.status).toBe(400);
  });

  it("Should POST a payment with invalid origin", async () => {
    const wrongPayment = {
      originAccount: generatorNumberOfAccount(),
    };
    const response = await request(app)
      .post(apiEndpoint)
      .send(wrongPayment);
    expect(response.status).toBe(404);
  });

  it("Should POST a payment with invalid destiny", async () => {
    const wrongPayment = {
      destinyAccount: generatorNumberOfAccount(),
    };
    const response = await request(app)
      .post(apiEndpoint)
      .send(wrongPayment);
    expect(response.status).toBe(404);
  });

  it("Should DELETE a payment", async () => {
    const payment = await Payment.create(objectPayment);
    const response = await request(app)
      .delete(apiEndpoint + payment._id);
    expect(response.status).toBe(200);
  });
})