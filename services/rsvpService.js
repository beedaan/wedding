var config = require('../config');
var Rsvp = require('../models/Rsvp');

var rsvpService = {
    'isCodeValid': function (code) {
        if (code.toLowerCase() === config.regKey.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    },
    'createRsvp': function (rsvpDto) {
        console.log('creating rsvp');
        Rsvp.create({
            name: rsvpDto.name,
            email: rsvpDto.email
        }, function (err) {
            if (err)
                throw(err);
        });
    }
};

module.exports = rsvpService;