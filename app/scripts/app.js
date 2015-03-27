'use strict';

/**
 * @ngdoc overview
 * @name ghUserInfoApp
 * @description
 * # ghUserInfoApp
 *
 * Main module of the application.
 */
angular
  .module('ghUserInfoApp', [
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
