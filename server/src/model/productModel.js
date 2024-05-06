const { default: mongoose } = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    validate: {
      validator: (v) => v.length > 0,
      message: 'Category is required',
    },
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
