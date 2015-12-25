var express = require('express');
var router = express.Router();

/* POST rsvp code */
router.post('/rsvp/code', function(req, res, next) {
  console.log(req);
  res.send('valid');
});

module.exports = router;
