'use strict';

/**
 * @ngdoc directive
 * @name electionsApp.directive:candidateHeight
 * @description
 * # candidateHeight
 */
angular.module('electionsApp')
  .directive('candidateHeight', function ($rootScope, $timeout, $window) {
    return {
      restrict: 'A',
      link: function postLink() {
        $rootScope.$on('contentLoaded', function(){
            $timeout(function(){
              var halfHeight = angular.element('#ac-candidate-wrapper').height() / 2;
              angular.element('.candidate-block').height(halfHeight);
            });            
        });

        $window.onresize = function(){
          var newHeight = angular.element('#ac-candidate-wrapper').height() / 2;
          angular.element('.candidate-block').height(newHeight);          
        };
      }
    };
  });
