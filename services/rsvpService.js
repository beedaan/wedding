var config = require('../config');

var rsvpService = {
    'isCodeValid' : function(code) {
        if(code.toLowerCase() === config.regKey.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
};

module.exports = rsvpService;