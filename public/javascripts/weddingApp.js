var weddingApp = angular.module('weddingApp', ['mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.helpers.dimensions'])
    .controller('mainController', ['$scope', '$log',
        function ($scope, $log) {
            $scope.test = 'test';

            $log.debug('testing');
        }])
    .directive();