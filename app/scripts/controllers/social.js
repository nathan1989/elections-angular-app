'use strict';

/**
 * @ngdoc function
 * @name electionsApp.controller:SocialCtrl
 * @description
 * # SocialCtrl
 * Controller of the electionsApp
 */
angular.module('electionsApp')
  .controller('SocialCtrl', function () {
    var stackla = document.createElement('script');
    stackla.setAttribute('src','//assetscdn.stackla.com/media/js/widget/fluid-embed.js');
    document.head.appendChild(stackla);
  });
