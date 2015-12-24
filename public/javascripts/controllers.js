'use strict';

angular.module('weddingApp.controllers', ['mgcrea.ngStrap.modal', 'mgcrea.ngStrap.scrollspy','duScroll', 'ngStrapLightbox', 'pascalprecht.translate']).
    controller('AppCtrl', function($scope, $log, $modal, Lightbox) {
        $log.debug('loaded AppCtrl');

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

        $scope.openLightboxModal = function (index) {
            console.log(index);
            Lightbox.openModal($scope, $scope.images, index);
        }
    }).
    controller('RsvpCtrl', function($scope, $log) {
        $scope.testData = 'testData';
        $log.debug('loaded RsvpCtrl')
    });
