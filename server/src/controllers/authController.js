const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const { catchAsync } = require('./catchAsync');

exports.register = catchAsync(async (req, res) => {
  const { email, name, password, confirmPassword, phoneNumber } = req.body;

  const user = await User.create({
    email,
    name,
    password,
    confirmPassword,
    phoneNumber,
  });

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Email and Password are required!', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePasswords(password, user.password))) {
    throw new AppError('Email or password mismatch', 400);
  }

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
