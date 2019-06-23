require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
const cors = require('cors');

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.options('*', cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use('/api/accounts', require('../components/account/accountRoutes'));
    this.express.use('/api/payments', require('../components/payment/paymentRoutes'));
    this.express.use('/api/releases', require('../components/release/releaseRoutes'));
  }
}

module.exports = new AppController().express;
