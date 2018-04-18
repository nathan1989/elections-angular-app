'use strict';

/**
 * @ngdoc directive
 * @name electionsApp.directive:searchAddress
 * @description
 * # searchAddress
 */
angular.module('electionsApp')
  .directive('searchAddress', function (addressService, notifyService) {
    return function (scope, element) {
    	scope.noAddress = false;
  		scope.resultChosen = false;

        element.bind('keyup', function() {
	  		var address = element.val();
	  	  	var addressLength = address.length;
	  		scope.error = false;
  			scope.resultChosen = false;
  			scope.reverseAnimate = false;
		
		    if(addressLength === 0){
		    	scope.results = '';
		    }

	  	  	var addressResults = addressService.search(address, 'DoAddressSearch');

	  	  	scope.loadingSearch = true;
	  	    addressResults.then(function(data){
			    if(addressLength > 1){
    		  		scope.noAddress = !data ? true : false;
					scope.results = data;
					scope.loadingSearch = false;
			    }
	  	    }).catch(function(){
	  	    	scope.loadingSearch = false;
				scope.error = true;
				// load error message
				notifyService.show('Sorry an error occurred, please try again later.', 'danger', 5000);
	  	    });
	    });
    };
  });
