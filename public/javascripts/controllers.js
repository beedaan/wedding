'use strict';

angular.module('weddingApp.controllers', ['mgcrea.ngStrap.modal','duScroll']).
    controller('AppCtrl', function($scope, $log, $modal) {
        $log.debug('loaded AppCtrl');

        $scope.openRsvpModal = function() {
            $modal({
                templateUrl: 'partials/rsvp',
                controller: 'RsvpCtrl'
            });
        }
    }).
    controller('RsvpCtrl', function($scope, $log) {
        $scope.testData = 'testData';
        $log.debug('loaded RsvpCtrl')
    });
