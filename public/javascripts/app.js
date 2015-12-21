'use strict';

var weddingApp = angular.module('weddingApp', [
    'weddingApp.controllers',
    'weddingApp.directives',
    'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
});