'use strict';

angular.module('weddingApp.services', []).
    factory('weddingFactory', function($http) {
        return {
            submitRsvp: function (rsvp) {
                return $http.post('api/rsvp/submit', rsvp);
            }
        };
    });