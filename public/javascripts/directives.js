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
    })
    .directive('lightbox', function () {
        return {
            link: function (scope, element) {
                angular.element(element).bind('click', function (event) {
                    event = event || window.event;
                    var target = event.target || event.srcElement,
                        link = target.src ? target.parentNode : target,
                        options = {index: link, event: event},
                        links = this.getElementsByTagName('a');
                    blueimp.Gallery(links, options);
                })
            }
        }
    });
