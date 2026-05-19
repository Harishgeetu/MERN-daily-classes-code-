const express = require('express');
const router = express.Router();
const AIResponse = require('../controller/promptController');

router.post('/prompt', AIResponse);

module.exports = router;
