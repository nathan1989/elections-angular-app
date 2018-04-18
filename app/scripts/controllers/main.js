'use strict';

/**
 * @ngdoc function
 * @name electionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the electionsApp
 */
angular.module('electionsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $window, addressService, notifyService, shareData, favouritesService) {
    $scope.content = $rootScope.currentLangContent;

  	// countdown clock
  	$scope.date = new Date('October 8, 2016 12:00:00'); // date that voting starts

  	$scope.timeTillEvent = {};

  	var updateClock = function () {
  		$scope.seconds = ($scope.date - new Date()) / 1000;
  		$scope.timeTillEvent = {
  				daysLeft: parseInt($scope.seconds / 86400),
  				hoursLeft: parseInt($scope.seconds % 86400 / 3600),
  				minutesLeft: parseInt($scope.seconds % 86400 % 3600 / 60),
  				secondsLeft: parseInt($scope.seconds % 86400 % 3600 % 60)
  		};
  	};

  	setInterval(function () {
  		$scope.$apply(updateClock);
  	}, 1000);

  	updateClock();

  	// fixed scroll side animations
  	function setViews(inview){
  		$scope.viewtwo = false;
  		$scope.viewthree = false;
  		$scope.viewfour = false;
  		$scope.viewfive = false;

  		if(inview !== undefined){

  	  		switch (inview) {
  	  		    case 2:
  					$scope.viewtwo = true;
  	  		        break;
  	  		    case 3:		    		
  		    		$scope.viewthree = true;
  	  		        break;
  	  		    case 4:		    		
  		    		$scope.viewfour = true;
  	  		        break;
  	  		    case 5:		    		
  		    		$scope.viewfive = true;
  	  		        break;
  	  		}
  		}
  	}

  	setViews();

  	$scope.inView = function(inview, part, page){
  		if(part === 'both'){
  			setViews(page);
  		}
      // when the last section is reached (not detecting 'both' state on smaller height devices)
      if(page === 5 && part === 'top'){
        $scope.viewtwo = false;
        $scope.viewthree = false;
        $scope.viewfour = false;
        $scope.viewfive = true;
      }
  	};

    // dynamic data
    var dynamicData = function () {
      switch ($scope.ward) {
          case 'Albany':
            $scope.dynamicOne = 'Your ward (Albany) has two councillors.';
          break;
          case 'Albert - Eden - Roskill':           
            $scope.dynamicOne = 'Your ward (Albert - Eden - Roskill) has two councillors.';
          break;
          case 'Franklin':
            $scope.dynamicOne = 'Your ward (Franklin) has one councillor.';
          break;
          case 'Howick':
            $scope.dynamicOne = 'Your ward (Howick) has two councillors.';
          break;
          case 'Manukau':
            $scope.dynamicOne = 'Your ward (Manuka) has two councillors.';
          break;
          case 'Manurewa - Papakura':
            $scope.dynamicOne = 'Your ward (Manurewa - Papakura) has two councillors.';
          break;
          case 'Maungakiekie - Tamaki':
            $scope.dynamicOne = 'Your ward (Maungakiekie - Tamaki) has one councillor.';
          break;
          case 'North Shore':
            $scope.dynamicOne = 'Your ward (North Shore) has two councillors.';
          break;
          case 'Orakei':
            $scope.dynamicOne = 'Your ward (Orakei) has one councillor.';
          break;
          case 'Rodney':
            $scope.dynamicOne = 'Your ward (Rodney) has one councillor.';
          break;
          case 'Waitakere':
            $scope.dynamicOne = 'Your ward (Waitakere) has two councillors.';
          break;
          case 'Waitemata and Gulf':
            $scope.dynamicOne = 'Your ward (Waitemata and Gulf) has one councillor.';
          break;
          case 'Whau':
            $scope.dynamicOne = 'Your ward (Whau) has one councillor.';
          break;
      }

      $scope.dynamicThree = ''; // Clear subdivision first as some addresses dont have them

      switch ($scope.board) {
          case 'Hibiscus and Bays':
            $scope.dynamicTwo = 'Your local board (Hibiscus and Bays), has eight members who represent your community.';
            if($scope.subdivision === 'Hibiscus Coast'){
              $scope.dynamicThree = '<br><br>The Hibiscus and Bays local board is divided into two subdivisions. You vote within your subdivision (Hibiscus Coast) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'East Coast Bays'){
              $scope.dynamicThree = '<br><br>The Hibiscus and Bays local board is divided into two subdivisions. You vote within your subdivision (East Coast Bays) for representative members on the overall local board.';
            }
          break;
          case 'Upper Harbour':
            $scope.dynamicTwo = 'Your local board (Upper Harbour), has six members who represent your community.';
          break;
          case 'Albert - Eden':
            $scope.dynamicTwo = 'Your local board (Albert - Eden), has eight members who represent your community.';
            if($scope.subdivision === 'Owairaka'){
              $scope.dynamicThree = '<br><br>The Albert - Eden local board is divided into two subdivisions. You vote within your subdivision (Owairaka) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Maungawhau'){
              $scope.dynamicThree = '<br><br>The Albert - Eden local board is divided into two subdivisions. You vote within your subdivision (Maungawhau) for representative members on the overall local board.';
            }
          break;
          case 'Puketapapa':
            $scope.dynamicTwo = 'Your local board (Puketapapa), has six members who represent your community.';
          break;
          case 'Franklin':
            $scope.dynamicTwo = 'Your local board (Franklin), has nine members who represent your community. ';
            if($scope.subdivision === 'Waiuku'){
              $scope.dynamicThree = '<br><br>The Franklin local board is divided into three subdivisions. You vote within your subdivision (Waiuku) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Pukekohe'){
              $scope.dynamicThree = '<br><br>The Franklin local board is divided into three subdivisions. You vote within your subdivision (Pukekohe) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Wairoa'){
              $scope.dynamicThree = '<br><br>The Franklin local board is divided into three subdivisions. You vote within your subdivision (Wairoa) for representative members on the overall local board.';
            }
          break;
          case 'Howick':
            $scope.dynamicTwo = 'Your local board (Howick), has nine members who represent your community.';
            if($scope.subdivision === 'Pakuranga'){
              $scope.dynamicThree = '<br><br>The Howick local board is divided into three subdivisions. You vote within your subdivision (Pakuranga) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Howick'){
              $scope.dynamicThree = '<br><br>The Howick local board is divided into three subdivisions. You vote within your subdivision (Howick) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Botany'){
              $scope.dynamicThree = '<br><br>The Howick local board is divided into three subdivisions. You vote within your subdivision (Botany) for representative members on the overall local board.';
            }
          break;
          case 'Mangere - Otahuhu':
            $scope.dynamicTwo = 'Your local board (Mangere - Otahuhu), has seven members who represent your community.';
          break;
          case 'Otara - Papatoetoe':
            $scope.dynamicTwo = 'Your local board (Otara - Papatoetoe), has seven members who represent your community.';
            if($scope.subdivision === 'Papatoetoe'){
              $scope.dynamicThree = '<br><br>The Otara - Papatoetoe local board is divided into two subdivisions. You vote within your subdivision (Papatoetoe) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Otara'){
              $scope.dynamicThree = '<br><br>The Otara - Papatoetoe local board is divided into two subdivisions. You vote within your subdivision (Otara) for representative members on the overall local board.';
            }
          break;
          case 'Manurewa':
            $scope.dynamicTwo = 'Your local board (Manurewa), has eight members who represent your community.';
          break;
          case 'Papakura':
            $scope.dynamicTwo = 'Your local board (Papakura), has six members who represent your community.';
          break;
          case 'Maungakiekie - Tamaki':
            $scope.dynamicTwo = 'Your local board (Maungakiekie - Tamaki), has seven members who represent your community.';
            if($scope.subdivision === 'Maungakiekie'){
              $scope.dynamicThree = '<br><br>The Maungakiekie - Tamaki local board is divided into two subdivisions. You vote within your subdivision (Maungakiekie) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Tamaki'){
              $scope.dynamicThree = '<br><br>The Maungakiekie - Tamaki local board is divided into two subdivisions. You vote within your subdivision (Tamaki) for representative members on the overall local board.';
            }
          break;
          case 'Kaipatiki':
            $scope.dynamicTwo = 'Your local board (Kaipatiki), has eight members who represent your community.';
          break;
          case 'Devonport - Takapuna':
            $scope.dynamicTwo = 'Your local board (Devonport - Takapuna), has six members who represent your community.';
          break;
          case 'Orakei':
            $scope.dynamicTwo = 'Your local board (Orakei), has seven members who represent your community.';
          break;
          case 'Rodney':
            $scope.dynamicTwo = 'Your local board (Rodney), has nine members who represent your community.';
            if($scope.subdivision === 'Wellsford'){
              $scope.dynamicThree = '<br><br>The Rodney local board is divided into four subdivisions. You vote within your subdivision (Wellsford) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Warkworth'){
              $scope.dynamicThree = '<br><br>The Rodney local board is divided into four subdivisions. You vote within your subdivision (Warkworth) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Kumeu'){
              $scope.dynamicThree = '<br><br>The Rodney local board is divided into four subdivisions. You vote within your subdivision (Kumeu) for representative members on the overall local board.';
            }
            if($scope.subdivision === 'Dairy Flat'){
              $scope.dynamicThree = '<br><br>The Rodney local board is divided into four subdivisions. You vote within your subdivision (Dairy Flat) for representative members on the overall local board.';
            }
          break;
          case 'Henderson - Massey':
            $scope.dynamicTwo = 'Your local board (Henderson - Massey), has eight members who represent your community.';
          break;
          case 'Waitakere Ranges':
            $scope.dynamicTwo = 'Your local board (Waitakere Ranges), has six members who represent your community.';
          break;
          case 'Great Barrier':
            $scope.dynamicTwo = 'Your local board (Great Barrier), has five members who represent your community.';
          break;
          case 'Waiheke':
            $scope.dynamicTwo = 'Your local board (Waiheke), has five members who represent your community.';
          break;
          case 'Waitemata':
            $scope.dynamicTwo = 'Your local board (Waitemata), has seven members who represent your community.';
          break;
          case 'Whau':
            $scope.dynamicTwo = 'Your local board (Whau), has seven members who represent your community.';
          break;
      }
    };

    // if address has already been entered, update dynamic data // Need to split string from results to make this work
    // var hasResults = Object.keys(favouritesService.get('results')).length > 0;
    // if(hasResults){
    //   var results = favouritesService.get('results');
    //   $timeout(function() { // needed as there are other $scope.$apply's running
    //     $scope.searchAddressInput = results.address;
    //     $scope.ward = results.ward;
    //     $scope.board = results.board;
    //     $scope.subdivision = results.subdivision;
    //     $scope.resultChosen = true;
    //     dynamicData();
    //     $scope.$apply();
    //   });
    // }

  	// use found address to get ward and board
  	$scope.getAddress = function(item){
      var address = item.currentTarget.innerText;
      $scope.searchAddressInput = address; // update input field to show chosen address

      // remove search results
      $scope.results = false;

      // query api for ward+board
      var addressResults = addressService.search(address, 'DoRatesInfoAddressSearch');
      addressResults.then(function(data){
        var theAddress = data[0];

        var boardWithSub = theAddress.ElectoralSubdivision[0]._text[0] !== null ? theAddress.LocalBoard[0]._text + ' (' + theAddress.ElectoralSubdivision[0]._text + ' Subdivision)' : theAddress.LocalBoard[0]._text; // check if subdivision exists
        var results = {'address': theAddress.ResultString[0]._text, 'ward': theAddress.Ward[0]._text, 'board': boardWithSub};

        shareData.setResult(results); // add data to service for another controller to consume
        favouritesService.set('results', results); // save data to local storage
        $rootScope.$emit('resultUpdated', results); // update rootscope
        
        // update dynamic data
        $scope.ward = theAddress.Ward[0]._text;
        $scope.board = theAddress.LocalBoard[0]._text;
        $scope.subdivision = theAddress.ElectoralSubdivision[0]._text[0] !== null ? theAddress.ElectoralSubdivision[0]._text : '';
        $scope.resultChosen = true;

        dynamicData();
      });      
  	};

    // dynamic data (only on English page)  
    var setDynamicData = function(){
      // var dynamicTextOne = 'Auckland has 20 <abbr data-uk-tooltip title="Councillors are elected officials who represent their ward. They work with the mayor on big picture issues that affect Auckland.">councillors</abbr> (Ngā kaikaunihera), representing 13 wards.';
      // var dynamicTextTwo = 'Auckland has 21 <abbr data-uk-tooltip title="Local boards are a voice for their communities. They make decisions about local facilities and support local initiatives and events.">local boards</abbr> (Ngā poari ā-rohe), each with between five and nine members who represent their community.';
      // var dynamicTextThree = '<br><br>Larger local board areas are divided into subdivisions. You vote (pōti) within your subdivision for representative members on the overall local board (Ngā poari ā-rohe).';
      var dynamicTextOne = 'Auckland has 20 <abbr data-uk-tooltip title="Councillors are elected officials who represent their ward. They work with the mayor on big picture issues that affect Auckland.">councillors</abbr>, representing 13 wards.';
      var dynamicTextTwo = 'Auckland has 21 <abbr data-uk-tooltip title="Local boards are a voice for their communities. They make decisions about local facilities and support local initiatives and events.">local boards</abbr>, each with between five and nine members who represent their community.';
      var dynamicTextThree = '<br><br>Larger local board areas are divided into subdivisions. You vote within your subdivision for representative members on the overall local board.';

      $scope.dynamicOne = dynamicTextOne;
      $scope.dynamicTwo = dynamicTextTwo;
      $scope.dynamicThree = dynamicTextThree;      
    };

    setDynamicData();

  	// reset result
  	$scope.resetField = function(){
  		$scope.searchAddressInput = null;
  		$scope.resultChosen = false;
  		$scope.noAddress = false;
      setDynamicData();
  	};

    // letterbox image resizing
    var img = document.getElementById('letterbox');

    var onResize = function() {
        $scope.letterHeight = {'height': img.height + 'px'};
        $scope.letterPosition = {'top': (img.height * 0.2) + 'px'};
    };

    img.onload = function () {
      onResize();
    };

    onResize();
    $window.onresize = function(){
        onResize();
        $scope.$apply();
    };

  	// bottom of page
  	$scope.bottom = function(view, part){
  		$scope.getLetter = part === 'bottom' ? true : false;
  	};

    // On language change, update stuff
    $rootScope.$on('$locationChangeStart', function() {
      setDynamicData();
      onResize();
    });

  });
