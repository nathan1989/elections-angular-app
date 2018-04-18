'use strict';

/**
 * @ngdoc function
 * @name electionsApp.controller:CandidatesearchCtrl
 * @description
 * # CandidatesearchCtrl
 * Controller of the electionsApp
 */
angular.module('electionsApp')
  .controller('CandidatesearchCtrl', function ($scope, $rootScope, $location, shareData, addressService, region, favouritesService) {

    // if address has already been entered, redirect to results page
    var hasResults = Object.keys(favouritesService.get('results')).length > 0;
    if(hasResults){
      var results = favouritesService.get('results');
      var hasAddress = results.address !== '' && results.address !== undefined ? results.address : null;
      $location.path('/candidates/' + results.ward + '/' + results.board + '/').search('address', hasAddress); // redirect to results page
    }

  	// default search to search by address
  	$scope.choiceSearch = 'address';
  	$scope.address = true;
  	$scope.ward = false;
  	$scope.animate = false;
  	$scope.reverseAnimate = !angular.equals( {}, shareData.getResult() ) ? true : false; // check if coming from results page

    // Change address placeholder depending on screen size
    function addressPlaceholder(){
      $scope.addressPlaceholder = window.innerWidth > 768 ? 'Address search' : 'Enter an address';
    } 

    addressPlaceholder();

    angular.element(window).bind('resize', function() {
      $scope.$apply(function() {
          addressPlaceholder();
        });
    });

  	// function which enables/disables search options depending on choice
  	$scope.chooseSearch = function(choice){
  		$scope.choiceSearch = choice === 'address' ? 'address' : 'ward';
  		$scope.address = choice === 'address' ? true : false;
  		$scope.ward = choice === 'address' ? false : true;
  	};
    
  	// use found address to get ward and board
  	$scope.getAddress = function(item){
      var address = item.currentTarget.innerText;
      var addressResults = addressService.search(address, 'DoRatesInfoAddressSearch');
      addressResults.then(function(data){
        var theData = data[0];
        var boardWithSub = theData.ElectoralSubdivision[0]._text[0] !== null ? theData.LocalBoard[0]._text + ' (' + theData.ElectoralSubdivision[0]._text + ' Subdivision)' : theData.LocalBoard[0]._text; // check if subdivision exists
        var results = {'address': theData.ResultString[0]._text, 'ward': theData.Ward[0]._text, 'board': boardWithSub};

        shareData.setResult(results); // add data to service for another controller to consume
        favouritesService.set('results', results); // save data to local storage
        $rootScope.$emit('resultUpdated', results); // update rootscope
        $location.path('/candidates/' + theData.Ward[0]._text + '/' + boardWithSub + '/'); // redirect to results page
      });
  	};

  	// search by ward+board
    $scope.wards = region.ward;
    $scope.wardBoard = function (a, b) {
        if(b === 'board'){
        	$scope.animate = true;
        	var results = {'address': '', 'ward': a, 'board': $scope.wardValues};
          shareData.setResult(results);
        	favouritesService.set('results', results); // save data to local storage
        	$rootScope.$emit('resultUpdated', results); // update rootscope

        	$location.path('/candidates/' + a + '/' + $scope.wardValues + '/'); // redirect to results page
        }
    };

    $scope.deleteFavourites = function(){
    	favouritesService.delete('results');
    };
  });
