'use strict';

var weddingApp = angular.module('weddingApp', [
    'weddingApp.controllers',
    'weddingApp.directives'
]).
config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});