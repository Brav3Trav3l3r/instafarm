const express = require('express');
const { getUserDetails } = require('../controllers/userController');

const rotuer = express.Router();

rotuer.get('/:userId', getUserDetails);

module.exports = rotuer;
