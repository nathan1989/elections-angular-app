'use strict';

/**
 * @ngdoc directive
 * @name electionsApp.directive:videoembed
 * @description
 * # videoembed
 */
angular.module('electionsApp')
  .directive('videoembed', function ($sce) {
    return {
      restrict: 'E',
      scope: {
      	video: '=video'
      },
      link: function postLink(scope, element) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = scope.video.match(regExp);

        if (match && match[2].length === 11) {
            element.html('<iframe width="687" height="385" src="' + $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + match[2]) + '" frameborder="0" allowfullscreen></iframe>');
        } else {
            element.html('<a href="' + scope.video + '" target="_blank">' + scope.video + '</a>');
        }
      }
    };
  });
