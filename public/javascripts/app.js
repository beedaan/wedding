'use strict';

var weddingApp = angular.module('weddingApp', [
    'weddingApp.controllers',
    'weddingApp.directives',
    'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
    // TODO do I need RouteProvider?
    $locationProvider.html5Mode(true);
});