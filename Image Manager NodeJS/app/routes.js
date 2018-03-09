const express = require('express');
const path = require('path');

const router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.render('pages/home');
});
