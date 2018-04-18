'use strict';

/**
 * @ngdoc service
 * @name electionsApp.shareData
 * @description
 * # shareData
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('shareData', function () {
    var result = {};

    return {
        getResult: function () {
            return result;
        },
        setResult: function (value) {
            result = value;
        }
    };
  });
