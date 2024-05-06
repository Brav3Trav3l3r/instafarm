const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const gloablErrorHandler = require('./controllers/errorController');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRotue');
const orderRouter = require('./routes/orderRotue');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.all('*', (req, res) => {
  res.sendStatus(404);
});

app.use(gloablErrorHandler);

module.exports = app;
