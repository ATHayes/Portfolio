'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
angular
  .module('projectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .when('/is2204', {
        templateUrl: 'views/is2204.html',
        controller: 'Is2204Ctrl'
      })
      .when('/ranked', {
        templateUrl: 'views/ranked.html',
        controller: 'RankedCtrl'
      })
      .when('/is2215', {
        templateUrl: 'views/is2215.html',
        controller: 'Is2215Ctrl'
      })
      .when('/is2215', {
        templateUrl: 'views/is2215.html',
        controller: 'Is2215Ctrl'
      })
      .when('/speedy', {
        templateUrl: 'views/speedy.html',
        controller: 'SpeedyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
