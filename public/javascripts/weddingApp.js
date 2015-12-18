var weddingApp = angular.module('weddingApp', [])
    .controller('mainController', ['$scope', '$log',
        function ($scope, $log) {
            $scope.test = 'test';

            $log.debug('testing');
        }])
    .directive();