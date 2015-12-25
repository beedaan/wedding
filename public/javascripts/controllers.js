'use strict';

angular.module('weddingApp.controllers', ['weddingApp.services', 'mgcrea.ngStrap.modal', 'mgcrea.ngStrap.scrollspy','duScroll']).
    controller('AppCtrl', function($scope, $log, $modal) {
        $scope.openRsvpModal = function() {
            $modal({
                templateUrl: 'partials/rsvp',
                controller: 'RsvpCtrl'
            });
        };

        $scope.images = [
            {
                'url': 'images/LHP-84.JPG',
                'thumbUrl': 'images/LHP-84.JPG'
            },
            {
                'url': 'images/LHP-78.JPG',
                'thumbUrl': 'images/LHP-78.JPG'
            },
            {
                'url': 'images/LHP-7.JPG',
                'thumbUrl': 'images/LHP-7.JPG'
            },
            {
                'url': 'images/LHP-45.JPG',
                'thumbUrl': 'images/LHP-45-landscape.JPG'
            },
            {
                'url': 'images/LHP-131.JPG',
                'thumbUrl': 'images/LHP-131.JPG'
            },
            {
                'url': 'images/LHP-39.JPG',
                'thumbUrl': 'images/LHP-39.JPG'
            }
        ];
    }).
    controller('RsvpCtrl', function($scope, $log, weddingFactory) {
        $scope.validateRsvpCode = function() {

            var code = {'code': rsvpValidate.code.value};

            weddingFactory.validateRsvpCode(code).then(function(res) {
                console.log('success!');
            })
        }
    });
