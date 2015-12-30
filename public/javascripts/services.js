'use strict';

angular.module('weddingApp.services', []).
    factory('weddingFactory', function($http) {
        return {
            validateRsvpCode: function (code) {
                return $http.post('api/rsvp/validate', code);
            },
            submitRsvp: function (rsvp) {
                return $http.post('api/rsvp/submit', rsvp);
            }
        };
    });