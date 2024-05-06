const Product = require('../model/productModel');
const AppError = require('../utils/AppError');
const { catchAsync } = require('./catchAsync');

exports.getProducts = catchAsync(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    data: products,
  });
});

exports.getAProduct = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    throw new AppError('Product does not exist!', 404);
  }

  res.status(200).json({
    status: 'success',
    data: product,
  });
});

exports.addProduct = catchAsync(async (req, res) => {
  const { name, price, description, image, category } = req.body;

  const product = await Product.create({
    name,
    price,
    description,
    image,
    category,
  });

  res.status(200).json({
    status: 'success',
    data: product,
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    throw new AppError('Product does not exist!', 404);
  }

  res.sendStatus(204);
});
