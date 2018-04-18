'use strict';

/**
 * @ngdoc service
 * @name electionsApp.candidateService
 * @description
 * # candidateService
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('candidateService', function ($http, candidateData) {
  	var service = [];

  	service.mayorData = function(){
	    return $http.get(candidateData.mayor).then(function(response) {			    	
	    	return response;
	    });
  	};

  	service.wardData = function(filter){
      var ward = filter !== undefined ? '&area=' + encodeURI(filter) : '';
	    return $http.get(candidateData.ward + ward).then(function(response) {
	    	return response;
	    });
  	};

    service.boardData = function(filter){
      var board = filter !== undefined ? '&area=' + encodeURI(filter) : '';
      return $http.get(candidateData.board + board).then(function(response) {
        return response;
      });
    };

    service.dhbData = function(filter){
      var dhb = filter !== undefined ? '&area=' + encodeURI(filter) : '';
      return $http.get(candidateData.dhb + dhb).then(function(response) {
        return response;
      });
    };

    service.licenseData = function(filter){
      var license = filter !== undefined ? '&area=' + encodeURI(filter) : '';
      return $http.get(candidateData.license + license).then(function(response) {
        return response;
      });
    };

  	return service;
  });
