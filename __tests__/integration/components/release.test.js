const request = require('supertest');
const app = require('../../../src/components/index')
require('../../../src/database');
const { Release } = require('../../../src/components/release/releaseModel');
const { Account } = require('../../../src/components/account/accountModel');
const generatorNumberOfAccount = require('../../../src/helpers/generatorNumberOfAccounts');

const apiEndpoint = '/api/releases/'

const objectRelease = {
  value: 1,
  plots: 1,
  originAccount: 1111,
  destinyAccount: 2222,
  date: '10/10/10'
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

describe("Release", () => {
  afterAll(async () => {
    await Release.remove({});
  })

  it("Should GET all releases", async () => {
    const res = await request(app).get(apiEndpoint);
    expect(res.status).toBe(200);
  });

  it("Should GET a release", async () => {
    const release = await Release.create(objectRelease);
    const response = await request(app).get(apiEndpoint + release._id);
    expect(response.status).toBe(200);
  });

  it("Should POST a release", async () => {
    await Account.create(originAccount);
    await Account.create(destinyAccount);

    const response = await request(app)
      .post(apiEndpoint)
      .send(objectRelease);
    expect(response.status).toBe(200);
  });

  it("Should POST a release empty and return error", async () => {
    const emptyRelease = {};
    const response = await request(app)
      .post(apiEndpoint)
      .send(emptyRelease);
    expect(response.status).toBe(400);
  });

  it("Should POST a release with invalid origin", async () => {
    const wrongRelease = {
      originAccount: generatorNumberOfAccount(),
    };
    const response = await request(app)
      .post(apiEndpoint)
      .send(wrongRelease);
    expect(response.status).toBe(404);
  });

  it("Should POST a release with invalid destiny", async () => {
    const wrongRelease = {
      destinyAccount: generatorNumberOfAccount(),
    };
    const response = await request(app)
      .post(apiEndpoint)
      .send(wrongRelease);
    expect(response.status).toBe(404);
  });

  it("Should POST a release with invalid date", async () => {
    const wrongRelease = {
      date: '10/10'
    };
    const response = await request(app)
      .post(apiEndpoint)
      .send(wrongRelease);
    expect(response.status).toBe(400);
  });

  it("Should DELETE a release", async () => {
    const release = await Release.create(objectRelease);
    const response = await request(app)
      .delete(apiEndpoint + release._id);
    expect(response.status).toBe(200);
  });
})