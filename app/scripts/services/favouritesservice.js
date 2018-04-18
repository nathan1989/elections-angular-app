'use strict';

/**
 * @ngdoc service
 * @name electionsApp.favouritesService
 * @description
 * # favouritesService
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('favouritesService', function (localStorageService) {
  	var data = [];

  	data.set = function(key, val) {
		return localStorageService.set(key, val);
	};

    data.get = function(key) {
    	var data = localStorageService.get(key) !== null ? localStorageService.get(key) : [];    	
		return data;
	};

	data.delete = function(key) {
		return localStorageService.remove(key);
	};

	data.clearAll = function() {
		return localStorageService.clearAll();
	};

	return data;
  });
