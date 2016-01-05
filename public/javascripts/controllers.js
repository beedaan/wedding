'use strict';

angular.module('weddingApp.controllers', ['weddingApp.services', 'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.alert', 'mgcrea.ngStrap.button', 'duScroll']).
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

        var alertOptions = {
            title: 'Uh Oh!',
            content: 'There was a problem saving your RSVP.  Please try again or ' +
            '<a href="mailto:bheussler@gmail.com">let Brendan know</a> if you keep having problems',
            container: '#alerts-container',
            placement: 'top',
            type: 'danger',
            duration: 7,
            show: true
        };

        $scope.$on('rsvpSubmit', function(event, data) {
            if(data === true) {
                alertOptions.title = 'Hurray!';
                alertOptions.content = "We got your RSVP and we're so excited you can make it!";
                alertOptions.type = 'success';
            } else if (data === false) {
                alertOptions.title = 'Bummer.';
                alertOptions.content = "We sorry you can't make it.  Thank you so much for letting us know!";
                alertOptions.type = 'info';
            }
            $alert(alertOptions);
        });

        $scope.images = [
            {
                'url': 'images/LHP-84.JPG',
                'thumbUrl': 'images/LHP-84-thumb.JPG'
            },
            {
                'url': 'images/LHP-78.JPG',
                'thumbUrl': 'images/LHP-78-thumb.JPG'
            },
            {
                'url': 'images/LHP-7.JPG',
                'thumbUrl': 'images/LHP-7-thumb.JPG'
            },
            {
                'url': 'images/LHP-45.JPG',
                'thumbUrl': 'images/LHP-45-thumb.JPG'
            },
            {
                'url': 'images/LHP-131.JPG',
                'thumbUrl': 'images/LHP-131-thumb.JPG'
            },
            {
                'url': 'images/LHP-39.JPG',
                'thumbUrl': 'images/LHP-39-thumb.JPG'
            }
        ];
    }).
    controller('RsvpCtrl', function($scope, $rootScope, $log, weddingFactory) {

        $scope.validated = false;
        $scope.rsvp = {
            'code': "",
            'name': "",
            'email': "",
            'attend': ""
        };

        $scope.submitForm = function() {
            if(!$scope.validated) {
                $scope.validateRsvpCode();
            } else {
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
            var eventData = 'error';
            weddingFactory.submitRsvp($scope.rsvp).then(function (res) {
                eventData = res.data;
            }, function(res) {
                if (res.status === 422) {
                    $log.error(res.statusText)
                } else if (res.status === 503) {
                    $log.error(res.statusText);
                }
            }).finally(function() {
                $scope.$hide();
                $rootScope.$broadcast('rsvpSubmit', eventData);
            });
        }
    });
