'use strict';

/**
 * @ngdoc function
 * @name electionsApp.controller:CandidateCtrl
 * @description
 * # CandidateCtrl
 * Controller of the electionsApp
 */
angular.module('electionsApp')
  .controller('CandidateCtrl', function ($scope, $rootScope, $filter, $routeParams, $location, $window, candidateService, ideasService, favouritesService, notifyService) {
    var filteredData = function(data){
		var filteredData = $filter('filter')(data, {CandidateId: $routeParams.id});
		if(!angular.equals({}, filteredData)){
			$scope.candidate = filteredData;	    			
		} else {
			$location.path('/');
		}
		$rootScope.$broadcast('contentLoaded');
    };
    
    // init ideas dropdown
    $scope.ideas = $filter('filter')(ideasService, {name: '!none'});
    $scope.ideasList = $scope.ideas[0].type;

    // share to fb
    $scope.sharePage = function(){
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + $location.absUrl(), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');      
    };

    // favourite
    var getFavourites = favouritesService.get('favourites');
    $scope.isFavText = false;

    $scope.favourite = function(person){
		var isFav = getFavourites.filter(function (elem) { return elem.CandidateId === person.CandidateId; });
		if(!isFav.length){ // if not in favourites, add it
			getFavourites.push(person);
			notifyService.show(person.Name + ' added to favourites!', 'success', 3000);
			$scope.isFavText = true;
		} else { // otherwise remove from favourites
			getFavourites = getFavourites.filter(function (elem) { return elem.CandidateId !== person.CandidateId; });
			notifyService.show(person.Name + ' removed from favourites.', 'success', 3000);
			$scope.isFavText = false;
		}
    	favouritesService.set('favourites', getFavourites); // update local storage
    	$rootScope.$emit('favsUpdated', getFavourites); // update global counter
    };

	if(getFavourites.length > 0){
		$scope.favInit = function(id){
			var favData = $filter('filter')(getFavourites, {CandidateId: id});

			if(favData.length > 0){
				$scope.isFavText = true;
				return true;
			} else {
				$scope.isFavText = false;
				return false;
			}
		};
	}

	switch ($routeParams.role.toLowerCase()) {
	    case 'mayor':
	    	candidateService.mayorData().then(function(response){
	    		filteredData(response.data);
	    	});
	        break;
	    case 'ward':
	    	candidateService.wardData().then(function(response){	    		
	    		filteredData(response.data);
	    	});
	        break;
	    case 'board':
	    	candidateService.boardData().then(function(response){
				filteredData(response.data);
	    	});
	        break;
	    case 'dhb':
	    	candidateService.dhbData().then(function(response){
				filteredData(response.data);
	    	});
	        break;
	    case 'license':
	    	candidateService.licenseData().then(function(response){
				filteredData(response.data);
	    	});
	        break;
	    default:
	    	// if none match, redirect to homepage
	    	$location.path('/');
	    	break;
	}

	$scope.back = function(){
		$window.history.back();
	};
  });
