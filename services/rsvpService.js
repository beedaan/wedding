var config = require('config');
var Rsvp = require('../models/Rsvp');

var rsvpService = {
    'isCodeValid': function (code) {
        return code.toLowerCase() === config.get('regKey').toLowerCase();
    },
    'createRsvp': function (rsvpDto, callback) {
        console.log('creating rsvp');
        var attend = rsvpDto.attend === 'yes';
        Rsvp.create({
            name: rsvpDto.name,
            email: rsvpDto.email,
            attend: attend
        }, function (err) {
            if (err)
                throw(err);
        }).then(function (rsvp) {
            callback(rsvp.attend);
        });
    }
};

module.exports = rsvpService;