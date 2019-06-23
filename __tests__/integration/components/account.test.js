const request = require('supertest');
const app = require('../../../src/components/index')
require('../../../src/database');
const { Account } = require('../../../src/components/account/accountModel');

const apiEndpoint = '/api/accounts/'
const objectAccount = {
  cpf: "122.179.880-42",
  number: 1234,
  balance: 1234
}

describe("Account", () => {
  afterAll(async () => {
    await Account.remove({});
  })

  it("Should GET all accounts", async () => {
    const res = await request(app).get(apiEndpoint);
    expect(res.status).toBe(200);
  });

  it("Should GET an account", async () => {
    const account = await Account.create(objectAccount);
    const response = await request(app).get(apiEndpoint + account._id);
    expect(response.status).toBe(200);
  });

  it("Should POST an account", async () => {
    const response = await request(app)
      .post(apiEndpoint)
      .send(objectAccount);
    expect(response.status).toBe(200);
  });

  it("Should POST an account empty and return error", async () => {
    const emptyAccount = {};
    const response = await request(app)
      .post(apiEndpoint)
      .send(emptyAccount);
    expect(response.status).toBe(400);
  });

  it("Should PUT an account", async () => {
    const account = await Account.create(objectAccount);
    const otherAccount = {
      cpf: "122.179.880-42",
      number: 4321,
      balance: 4321
    }
    const response = await request(app)
      .put(apiEndpoint + account._id)
      .send(otherAccount);
    expect(response.status).toBe(200);
  });

  it("Should DELETE an account", async () => {
    const account = await Account.create(objectAccount);
    const response = await request(app)
      .delete(apiEndpoint + account._id);
    expect(response.status).toBe(200);
  });
})