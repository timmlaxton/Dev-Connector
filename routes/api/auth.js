const express = require('express');
const router = express.Router();


// GET Auth
router.get('/', (req, res) => res.send ('Auth route'));

module.exports = router;