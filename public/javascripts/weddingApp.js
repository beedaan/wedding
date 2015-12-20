var weddingApp = angular.module('weddingApp', ['ngAnimate', 'mgcrea.ngStrap', 'smoothScroll'])
    .controller('mainController', ['$scope', '$log',
        function ($scope) {
            $scope.activeCollapse = -1;
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
