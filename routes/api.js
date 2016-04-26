var express = require('express');
var service = require('../services/rsvpService');
var router = express.Router();

/* POST rsvp code */
router.post('/rsvp/validate', function (req, res) {
    if (service.isCodeValid(req.body.code)) {
        res.sendStatus(200);
    } else {
        res.status(422).send('Invalid registration key')
    }
});

router.post('/rsvp/submit', function (req, res) {
    try {
        service.createRsvp(req.body, sendAttendStatus);
    } catch (e) {
        res.sendStatus(503);
    }

    function sendAttendStatus(attend) {
        res.status(200).send(attend);
    }
});

module.exports = router;
