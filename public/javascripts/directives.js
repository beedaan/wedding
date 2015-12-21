angular.module('weddingApp.directives', ['ngAnimate', 'mgcrea.ngStrap.collapse'])
    .directive('topSpy', function ($window) {
        return {
            link: function (scope) {
                angular.element($window).bind('load', function () {
                    scope.atTop = this.pageYOffset >= 50;
                    scope.$apply();
                });
                angular.element($window).bind('scroll', function () {
                    scope.atTop = this.pageYOffset >= 50;
                    scope.$apply();
                });
            }
        }
    });
