'use strict';

/**
 * @ngdoc filter
 * @name electionsApp.filter:trusthtml
 * @function
 * @description
 * # trusthtml
 * Filter in the electionsApp.
 */
angular.module('electionsApp')
  .filter('trusthtml', function ($sce) {
    return function (html) {
      return $sce.trustAsHtml(html);
    };
  });
