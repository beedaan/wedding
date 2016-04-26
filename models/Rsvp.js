var mongoose = require('mongoose');

var RsvpSchema = new mongoose.Schema({
        name: String,
        email: String,
        attend: Boolean
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Rsvp', RsvpSchema);
