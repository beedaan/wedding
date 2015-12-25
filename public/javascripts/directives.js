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
    // The following directive assumes there is a body tag
    .directive('lightbox', function () {
        return {
            link: function (scope, element) {
                var body = document.querySelector('body');
                angular.element(body).append(
                    '<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">' +
                    '<div class="slides"></div>' +
                    '<h3 class="title"></h3>' +
                    '<a class="prev">‹</a>' +
                    '<a class="next">›</a>' +
                    '<a class="close">×</a>' +
                    '<a class="play-pause"></a>' +
                    '<ol class="indicator"></ol>' +
                    '</div>');

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
