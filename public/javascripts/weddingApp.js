var weddingApp = angular.module('weddingApp', ['ngAnimate', 'mgcrea.ngStrap'])
    .controller('mainController', ['$scope', '$log',
        function ($scope, $log) {
            $log.debug('loaded');
        }]);