'use strict';

/**
 * @ngdoc service
 * @name electionsApp.googleInit
 * @description
 * # googleInit
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('googleInit', function ($window, $q) {
    //Google's url for async maps initialization accepting callback function
    var deferred = $q.defer();

    // Load Google map API script
    function loadScript() {  
        // Use global document since Angular's $document is weak
        var script = document.createElement('script');
        var footer = document.getElementById('footer');
        var async = document.createAttribute('async');
        var defer = document.createAttribute('defer');
        script.setAttributeNode(async);
        script.setAttributeNode(defer);
        script.src = '//maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCH8oLPvTi-hzTFL8kcj1zSgN7sSJxk2I4&callback=initMap';


        footer.parentNode.insertBefore(script, footer.nextSibling);
    }

    // Script loaded callback, send resolve
    $window.initMap = function () {
        deferred.resolve();
    };

    loadScript();

    return deferred.promise;
  });
