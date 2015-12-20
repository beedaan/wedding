var weddingApp = angular.module('weddingApp', ['ngAnimate', 'mgcrea.ngStrap'])
    .controller('mainController', ['$scope', '$log',
        function ($scope) {
            $scope.activeCollapse = -1;

            $scope.modal = {
                'title': 'My modal title ',
                'content': 'Here is some bullshit modal content'
            }
        }])
    .directive('topSpy', function($window) {
        return {
            link: function(scope) {
                angular.element($window).bind('scroll', function () {
                    scope.atTop = this.pageYOffset >= 50;
                    scope.$apply();
                });
            }
        }
    });
