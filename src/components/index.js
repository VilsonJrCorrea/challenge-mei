
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/accounts', require('./account/accountRoutes'));
app.use('/api/payments', require('../components/payment/paymentRoutes'));
app.use('/api/releases', require('../components/release/releaseRoutes'));

module.exports = { app };
