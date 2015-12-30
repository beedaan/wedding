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

        $scope.validated = false;
        $scope.rsvp = {
            'code': "",
            'name': "",
            'email': ""
        };

        $scope.submitForm = function() {
            if(!$scope.validated) {
                $scope.validateRsvpCode();
            }
            else {
                $scope.submitRsvp();
            }
        };

        $scope.validateRsvpCode = function() {

            var code = {'code': $scope.rsvp.code};

            weddingFactory.validateRsvpCode(code).then(function() {
                $scope.validated = true;
            }, function(res) {
                if(res.status === 422) {
                    $scope.rsvpForm.code.$setValidity('invalidKey', false);
                }
            });
        };

        $scope.submitRsvp = function () {
            weddingFactory.submitRsvp($scope.rsvp).then(function () {
                $scope.$hide();
            }, function(res) {
                if (res.status === 422) {
                    console.log('invalid key')
                } else if (res.status === 503) {
                    console.log('database timeout');
                }
            });
        }
    });
