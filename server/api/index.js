require('dotenv-flow').config();

const mongoose = require('mongoose');
const app = require('../src/app');

console.log(process.env.NODE_ENV);

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception 💥');
  console.log(err.name);

  process.exit(1);
});

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('✅ Connected to database');
});

const server = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection 💥');
  console.log(err.name, err.message);
});
