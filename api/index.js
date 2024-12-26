const dotenv = require('dotenv');
const connectToDataBase = require('./src/database/connect.js');
require('./express.js');

dotenv.config();
connectToDataBase();