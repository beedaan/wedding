var express = require('express');
var config = require('../config');
var router = express.Router();

/* POST rsvp code */
router.post('/rsvp/validate', function(req, res) {
  if(req.body.code.toLowerCase() === config.regKey.toLowerCase()) {
    res.sendStatus(200);
  } else {
    res.status(422).send('Invalid registration key')
  }
});

module.exports = router;
