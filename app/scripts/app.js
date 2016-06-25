'use strict';

/**
 * @ngdoc overview
 * @name sponsBrochureApp
 * @description
 * # sponsBrochureApp
 *
 * Main module of the application.
 */
angular
  .module('sponsBrochureApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFx',
    'scroll-animate-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/spons-rep.html',
        controller: 'homeCtrl',
        controllerAs: 'Home'
      })
      .when('/aerofest', {
        templateUrl: 'views/spons-events-aerofest.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/b-events', {
        templateUrl: 'views/spons-events-B-events.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/coding', {
        templateUrl: 'views/spons-events-coding.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/department-flagship', {
        templateUrl: 'views/spons-events-department-flagship.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/design-and-build', {
        templateUrl: 'views/spons-events-design-and-build.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/electronics-fest', {
        templateUrl: 'views/spons-events-electronics-fest.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/involve', {
        templateUrl: 'views/spons-events-involve.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/quizzing', {
        templateUrl: 'views/spons-events-quizzing.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/research', {
        templateUrl: 'views/spons-events-research.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/workshops', {
        templateUrl: 'views/spons-workshops.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/shows', {
        templateUrl: 'views/spons-shows.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/exhibitions', {
        templateUrl: 'views/spons-exhibitions.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/publicity', {
        templateUrl: 'views/spons-publicity.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/social', {
        templateUrl: 'views/spons-social.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/participants-quotes', {
        templateUrl: 'views/spons-participants-quotes.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/sponsors-quotes', {
        templateUrl: 'views/spons-sponsors-quotes.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/avenues', {
        templateUrl: 'views/spons-avenues.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .when('/why-shaastra', {
        templateUrl: 'views/spons-why.html',
        controller: 'menuCtrl',
        controllerAs: 'Menu'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
