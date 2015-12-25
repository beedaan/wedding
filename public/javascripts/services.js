'use strict';

angular.module('weddingApp.services', []).
    factory('weddingFactory', function($http) {
        return {
            validateRsvpCode: function () {
                console.log('working');
                $http.get('http://google.com');
            }
        };
    });
