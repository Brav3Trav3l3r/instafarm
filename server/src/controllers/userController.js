const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const { catchAsync } = require('./catchAsync');

exports.getUserDetails = catchAsync(async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const user = await User.findById(userId);

  console.log(user);

  if (!user)
    return new AppError(`Couldn't find user with id ${req.user.id}`, 400);

  delete user.password;

  return res.status(200).json({
    status: 'success',
    data: user,
  });
});
