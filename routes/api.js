var express = require('express');
var service = require('../services/rsvpService');
var router = express.Router();

/* POST rsvp code */
router.post('/rsvp/validate', function(req, res) {
  if(service.isCodeValid(req.body.code)) {
    res.sendStatus(200);
  } else {
    res.status(422).send('Invalid registration key')
  }
});

router.post('/rsvp/submit', function(req, res) {
  if(service.isCodeValid(req.body.code)) {
    try {
      service.createRsvp(req.body);
    } catch (e) {
      res.sendStatus(503);
    }
    res.sendStatus(200);
  } else {
    res.status(422).send('Invalid registration key')
  }
});

module.exports = router;
