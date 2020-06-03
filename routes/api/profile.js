const express = require('express');
const router = express.Router();


// GET Profiles
router.get('/', (req, res) => res.send ('Profile route'));

module.exports = router;