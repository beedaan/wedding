var weddingApp = angular.module('weddingApp', ['ngAnimate', 'mgcrea.ngStrap']);

weddingApp.controller('mainController', ['$scope', '$log',
    function ($scope, $log) {
        $log.debug('loaded MainController');
    }]);

weddingApp.directive('topSpy', function ($window) {
    return {
        link: function (scope) {
            angular.element($window).bind('scroll', function () {
                scope.atTop = this.pageYOffset >= 50;
                scope.$apply();
            });
        }
    }
});
