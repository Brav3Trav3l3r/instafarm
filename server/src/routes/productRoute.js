const express = require('express');
const {
  addProduct,
  getProducts,
  deleteProduct,
  getAProduct,
} = require('../controllers/prouctController');

const router = express.Router();

router.route('/').get(getProducts).post(addProduct);
router.route('/:id').get(getAProduct).delete(deleteProduct);

module.exports = router;
