'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

// Validate Header 

router.get('/', controller.getDataById);

module.exports = router;