'use strict';

/**
 * @ngdoc filter
 * @name electionsApp.filter:newLines
 * @function
 * @description
 * # newLines
 * Filter in the electionsApp.
 */
angular.module('electionsApp')
  .filter('newLines', function () {
    return function (text) {
      return text.replace(/\r\n/g, '<br>');
    };
  });
