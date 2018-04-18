'use strict';

/**
 * @ngdoc function
 * @name electionsApp.controller:CandidatesCtrl
 * @description
 * # CandidatesCtrl
 * Controller of the electionsApp
 */
angular.module('electionsApp')
  .controller('CandidatesCtrl', function ($scope, $rootScope, $location, $routeParams, $q, addressService, shareData, candidateService, $filter, region, ideasService, favouritesService, notifyService) {

  	var noSearchData = angular.equals( {}, shareData.getResult() ); // no search data from the search box
  	$scope.reverseAnimate = false;
    $scope.animate = noSearchData ? false : true;
    $scope.favView = false;

	  var getFavourites = favouritesService.get('favourites');

    // function which toggles between filters on mobile
    $scope.role = true;
    $scope.chooseFilter = function(choice){
      $scope.role = choice === 'role' ? true : false;
      $scope.idea = choice === 'role' ? false : true;
    };

    // populate DHB and license trust dropdowns
    $scope.dhbOptions = [
      { name: 'Auckland', type: 'Auckland' },
      { name: 'Counties Manukau',  type: 'Counties Manukau'}, 
      { name: 'Waitemata', type: 'Waitemata'}
    ];
    $scope.licenseOptions = [
      { name: 'Birkenhead', type: 'Birkenhead' },
      { name: 'Mt Wellington',  type: 'Mt Wellington'}, 
      { name: 'Portage - Ward 1 (Auckland City)', type: 'Portage - Ward 1 (Auckland City)'},
      { name: 'Portage - Ward 2 (New Lynn)', type: 'Portage - Ward 2 (New Lynn)' },
      { name: 'Portage - Ward 3 (Glen Eden)', type: 'Portage - Ward 3 (Glen Eden)' },
      { name: 'Portage - Ward 4 (Titirangi/Green Bay)', type: 'Portage - Ward 4 (Titirangi/Green Bay)' },
      { name: 'Portage - Ward 5 (Kelston West)', type: 'Portage - Ward 5 (Kelston West)' },
      { name: 'Wiri', type: 'Wiri' },
      { name: 'Waitakere - Ward 1 (Te Atatu)', type: 'Waitakere - Ward 1 (Te Atatu)' },
      { name: 'Waitakere - Ward 2 (Lincoln)', type: 'Waitakere - Ward 2 (Lincoln)' },
      { name: 'Waitakere - Ward 3 (Waitakere)', type: 'Waitakere - Ward 3 (Waitakere)' },
      { name: 'Waitakere - Ward 4 (Henderson)', type: 'Waitakere - Ward 4 (Henderson)' }
    ];

    // populate roles
    $scope.roles = [
      { name: 'Mayor', type: 'mayor'}, 
      { name: 'Ward councillor', type: 'ward'}, 
      { name: 'Local board member', type: 'board'},
      { name: 'District health board', type: 'dhb', initHidden: true},
      { name: 'Licensing trusts', type: 'license', initHidden: true},
    ];

    // populate candidate idea filters
    $scope.ideas = ideasService;

    // populate share links
    $scope.shareLinks = [
      { name: 'Facebook', link: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($location.absUrl()), target: '_blank', icon: 'uk-icon-facebook-square' },
      { name: 'Twitter', link: 'https://twitter.com/share?url=' + encodeURIComponent($location.absUrl()) + '&text=' + encodeURIComponent($rootScope.page.title), target: '_blank', icon: 'uk-icon-twitter-square' },
      { name: 'Email', link: 'mailto:?Subject=' + encodeURIComponent($rootScope.page.title) + '&body=' + encodeURIComponent($location.absUrl()), target: '__self', icon: 'uk-icon-envelope' }
    ];

    $scope.sharePage = function(event){
      switch (event.name){
        case 'Facebook':
        case 'Twitter':
          window.open(event.link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        break;
      }
    };

  	// function hasQuery(){
  	// 	var query = {
   //      ward: $routeParams.ward,
   //      board: $routeParams.board,
  	// 		address: $location.search().address,
   //      mayor: $location.search().mayor,
   //      dhb: $location.search().dhb,
   //      license: $location.search().license
  	// 	};
  	//   	var wardCheck = (Object.keys(region.ward).indexOf(query.ward) > -1);
  	//   	var boardCheck = (region.board.indexOf(query.board) > -1);

  	// 	if(!wardCheck || !boardCheck){
  	// 		return false;
  	// 	}

  	// 	return query;
  	// }

  	var getAddressData = function(address){
  		var theAddress;
  		var defer = $q.defer();
  		addressService.search(address, 'DoRatesInfoAddressSearch')
  			.then(function(data){
  				if(data){
  				  theAddress = data[0].ResultString[0]._text;
  				}
  				defer.resolve(theAddress);
  			});	
  		return defer.promise;
  	};

    // set address, ward and board
    if(!noSearchData){ // if coming from search, or no page refresh
      var hasSearchAddress = angular.isDefined(shareData.getResult().address) && shareData.getResult().address !== '';
	    $scope.address = hasSearchAddress ? shareData.getResult().address : false;
	    if(hasSearchAddress){	    	
	    	$location.search( 'address', shareData.getResult().address );
	    }
      $scope.ward = shareData.getResult().ward;
      $scope.board = shareData.getResult().board;
    } else { // if navigating directly to page, or page refresh
      if($location.search().address !== undefined){     
  			getAddressData($location.search().address).then(function(data){
  				$scope.address = data;
  			});
  		}
      $scope.ward = Object.keys(region.ward).indexOf($routeParams.ward) > -1 ? $routeParams.ward : '';
      $scope.board = region.board.indexOf($routeParams.board) > -1 ? $routeParams.board : '';
    }

    // favourites

    // TEMP
    $scope.deleteFavourites = function(){
    	favouritesService.delete('favourites');
    	$rootScope.$emit('favsUpdated', 0); // update global counter
    	$scope.favInit = function(){
			return false;
  		};
    };

    $scope.favourite = function(person){
		var isFav = getFavourites.filter(function (elem) { return elem.CandidateId === person.CandidateId; });
		if(!isFav.length){ // if not in favourites, add it
			getFavourites.push(person);
			notifyService.show(person.Name + ' added to favourites!', 'success', 3000);
		} else { // otherwise remove from favourites
			getFavourites = getFavourites.filter(function (elem) { return elem.CandidateId !== person.CandidateId; });
			notifyService.show(person.Name + ' removed from favourites.', 'success', 3000);
		}
    	favouritesService.set('favourites', getFavourites); // update local storage
    	$rootScope.$emit('favsUpdated', getFavourites); // update global counter
    };

    if(getFavourites.length > 0){
  		$scope.favInit = function(id){
  			var favData = $filter('filter')(getFavourites, {CandidateId: id});

  			if(favData.length > 0){
  				return true;
  			} else {
  				return false;
  			}
  		};
    }

    function favPageEvent(state){
      $scope.favView = state;
      var updateUrl = state ? true : null;
      var hasAddress = $location.search().address !== undefined ? $location.search().address : null;
	    $location.search({'address': hasAddress, 'favourites' : updateUrl, 'mayor' : true, 'ward' : true, 'board' : true});
    }

    if($location.search().favourites !== undefined){
      favPageEvent(true);
    }

    $scope.favPage = function(state){
    	favPageEvent(state);
    };

    // filters - roles

    // update conditional roles
    $scope.updateFilterStatus = true;
    $scope.hideDhb = 'dhb';
    $scope.hideLicense = 'license';

    function roleUpdate(area, type){
      var checkbox = type === 'dhb' && type !== null ? $scope.therole.chosen.dhb : $scope.therole.chosen.license;
      var check = angular.isDefined(checkbox) && checkbox ? true : false;

      if(area !== null){ // if select box is empty
        populateData(type, check, area);
        switch (type){
          case 'dhb':
            $scope.hideDhb = false;
          break;
          case 'license':
            $scope.hideLicense = false;
          break;
        }
      } else {
        populateData(type, false);
        switch (type){
          case 'dhb':
            $scope.hideDhb = 'dhb';
          break;
          case 'license':
            $scope.hideLicense = 'license';
          break;
        }
      }
    }

    // check/uncheck of license trust checkbox
    $scope.licenseChange = function(event){
      if(!event){ // if checkbox is unchecked, hide license and clear license select box
        roleUpdate(null, 'license');
        $scope.licenseOptionsList = '';
      }
    };

    // show/hide certain roles
    $scope.roleUpdate = function(area, type){
      roleUpdate(area, type);
    };

  	var populateData = function(data, status, area){

  		switch (data) {
		    case 'mayor':
	    		if(status){ // if data is true, show it
	    			if(angular.isDefined($location.search().favourites)){
	    				$scope.mayorList = $filter('filter')(getFavourites, {CandidateRole: 'Mayor'});
	    			} else {
			    		candidateService.mayorData().then(function(response){
		    				$scope.mayorList = response.data;
				    	});
	    			}
		    		$location.search(angular.extend({}, $location.search(), {'mayor': true})); // update url with query
	    		} else { // otherwise remove it
		    		$scope.mayorList = '';
		    		$location.search('mayor', null);
	    		}
		    break;
		    case 'ward':
	    		if(status){ // if data is true, show it
	    			if(angular.isDefined($location.search().favourites)){
	    				$scope.wardList = $filter('filter')(getFavourites, {CandidateRole: 'Ward'});
	    			} else {
			    		candidateService.wardData($routeParams.ward).then(function(response){
			    			$scope.wardList = response.data;
				    	});
	    			}
		    		$location.search(angular.extend({}, $location.search(), {'ward': true})); // update url with query
	    		} else { // otherwise remove it
		    		$scope.wardList = '';
  					$location.search('ward', null);
	    		}
		    break;
		    case 'board':
	    		if(status){ // if data is true, show it		
	    			if(angular.isDefined($location.search().favourites)){
	    				$scope.boardList = $filter('filter')(getFavourites, {CandidateRole: 'Board'});
	    			} else {
    	    		candidateService.boardData($routeParams.board).then(function(response){	    
    	    			$scope.boardList = response.data;
    		    	});
	    			}    	
		    		$location.search(angular.extend({}, $location.search(), {'board': true})); // update url with query
	    		} else { // otherwise remove it
		    		$scope.boardList = '';
  					$location.search('board', null);
	    		}
		    break;
        case 'dhb':
          if(status){ // if data is true, show it
            if($location.search().dhb !== undefined){ // updated select box if query exists
              $scope.dhbOptionsList = $location.search().dhb;
            }

            if(area !== undefined){ // update select box on change
              $scope.dhbOptionsList = area;
            }

            if(angular.isDefined($location.search().favourites)){
              $scope.dhbList = $filter('filter')(getFavourites, {CandidateRole: 'DHB'});
            } else {
              if($scope.dhbOptionsList !== undefined){                
                candidateService.dhbData($scope.dhbOptionsList).then(function(response){
                  $scope.dhbList = response.data;
                });
              }        
            }

            $location.search(angular.extend({}, $location.search(), {'dhb': $scope.dhbOptionsList})); // update url with query
          } else { // otherwise remove it
            $scope.dhbList = '';
            $location.search('dhb', null);
          }
        break;
        case 'license':
          if(status){ // if data is true, show it
            if($location.search().license !== undefined){ // updated select box if query exists
              $scope.licenseOptionsList = $location.search().license;
            }

            if(area !== undefined){ // update select box on change
              $scope.licenseOptionsList = area;
            }
            if(angular.isDefined($location.search().favourites)){
              $scope.licenseList = $filter('filter')(getFavourites, {CandidateRole: 'Licensing Trust'});
            } else {
              if($scope.licenseOptionsList !== undefined){                
                candidateService.licenseData($scope.licenseOptionsList).then(function(response){     
                  $scope.licenseList = response.data;
                });
              }
            }     
            $location.search(angular.extend({}, $location.search(), {'license': $scope.licenseOptionsList})); // update url with query
          } else { // otherwise remove it
            $scope.licenseList = '';
            $location.search('license', null);
          }
        break;
  		}
  	};

  	var checkRole = function(chosen){

  		var 
	  		mayor, 
	  		ward, 
	  		board,
        dhb,
        license,
	  		checkboxes = {};

  		mayor = angular.isDefined(chosen) ? chosen.mayor : $location.search().mayor;
  		ward = angular.isDefined(chosen) ? chosen.ward : $location.search().ward;
      board = angular.isDefined(chosen) ? chosen.board : $location.search().board;
      dhb = angular.isDefined(chosen) ? chosen.dhb : $location.search().dhb;
      license = angular.isDefined(chosen) ? chosen.license : $location.search().license;

  		var types = {
			'mayor' : mayor,
			'ward' : ward,
			'board' : board,
      'dhb' : dhb,
      'license' : license
  		};

  		function showType(key, value){
  			if(angular.isDefined(key) && key){
  				populateData(value, true);
  			} else {
  				populateData(value, false);
  			}
  		}

  		angular.forEach(types, function(key, value){
  			showType(key, value);
	   	});		

  		if(angular.isUndefined(chosen)){
  			// check checkbox					
  			if(angular.isDefined(mayor) && mayor){
  				checkboxes.mayor = true;
  			}
  			if(angular.isDefined(ward) && ward){
  				checkboxes.ward = true;
  			}
  			if(angular.isDefined(board) && board){
  				checkboxes.board = true;
  			}
        if(angular.isDefined(dhb) && dhb){
          $scope.hideDhb = false;
          checkboxes.dhb = true;
        }
        if(angular.isDefined(license) && license){
          $scope.licenseCheck = true;
          $scope.hideLicense = false;
          checkboxes.license = true;
        }
  			$scope.therole = {chosen: checkboxes};  			
  		}
  	};

  	checkRole();

  	$scope.selectRole = function(chosen){
  		checkRole(chosen);
  	};

    // Init radios to value none
    $scope.ideasGroup = 0;

    // select radio event
    $scope.selectIdea = function(event){
      var hasValue = event.type !== '';
      $scope.ideaTitle = hasValue ? event.name : '';
      $scope.ideaDescription = hasValue ? event.description : '';
      $scope.ideasView = hasValue ? true : false;
    };

    // reset all filters
  	$scope.resetFilters = function(){
  		// empty url filters
  		angular.forEach($location.search(), function(value, key){
  			var re = new RegExp('^(?!.*?\address|favourites\)');
  			if(key.match(re)){ // remove all filters except for address and favourite view
  				$location.search(key, null);
  			}
	   	});

  		// uncheck checkboxes
  		$scope.therole = {chosen : {}};

      // reset ideas
      $scope.ideasGroup = 0;

		  // empty lists
  		$scope.mayorList = '';
  		$scope.wardList = '';
  		$scope.boardList = '';
      $scope.dhbList = '';
      $scope.licenseList = '';
  	};

  	// URL change detection
  	$scope.$on('$locationChangeStart', function() {
  		// console.log('event: ' + event + ' | next:  ' + next + ' | current: ' + current);
  		if(noSearchData){ // if search data exists, check if address is in the data
  			var hasAddress = $location.search().address !== undefined;
  			$scope.address = hasAddress ? $location.search().address : false;
  		}

  		checkRole();
  	});

    // navigating back to search page
  	$scope.willAnimate = function(){
  		$scope.animate = false;
  		$scope.reverseAnimate = true;
  		shareData.setResult({'animate': true});
  		favouritesService.delete('results'); // remove address from local storage
      $rootScope.$emit('resultUpdated');
  	};
  });