'use strict';

/*
 * Mount point: /api
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'Server running. All good.' });
});

module.exports = router;

