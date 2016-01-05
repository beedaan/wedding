var config = require('config');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {enableRsvp: config.enableRsvp});
});

module.exports = router;
