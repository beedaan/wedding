'use strict';

angular.module('weddingApp.controllers', ['weddingApp.services', 'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.alert', 'duScroll']).
    controller('AppCtrl', function($scope, $log, $modal, $alert) {
        var rsvpModal = $modal({
            templateUrl: 'partials/rsvp',
            controller: 'RsvpCtrl',
            scope: $scope,
            show: false
        });

        $scope.openRsvpModal = function() {
            rsvpModal.$promise.then(rsvpModal.show);
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

        $scope.$on('modal.hide', function() {
            var myAlert = $alert({
                title: 'Thanks!',
                content: 'We got your reservation',
                container: '#alerts-container',
                placement: 'top',
                type: 'success',
                duration: 4,
                show: true});
        });
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
            weddingFactory.submitRsvp($scope.rsvp).then(function (res) {
                $log.debug('saved rsvp', $scope.rsvp);
            }, function(res) {
                if (res.status === 422) {
                    $log.error(res.statusText)
                } else if (res.status === 503) {
                    $log.error(res.statusText);
                }
            }).finally(function() {
                $scope.$hide();
            });
        }
    });
