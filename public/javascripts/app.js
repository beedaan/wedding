'use strict';

var weddingApp = angular.module('weddingApp', [
    'weddingApp.controllers',
    'weddingApp.directives',
    'ngRoute',
    'mgcrea.ngStrap'
]).
config(function ($routeProvider, $locationProvider) {
    // TODO do I need RouteProvider?
    $locationProvider.html5Mode(true);
});