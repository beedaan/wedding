var mongoose = require('mongoose');

var RsvpSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Rsvp', RsvpSchema);