require('dotenv').config();
require('./components/');
require('./database/')(process.env.DB_URL);
require('./server/')(process.env.PORT);