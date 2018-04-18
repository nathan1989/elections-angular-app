'use strict';
/**
 * @ngdoc function
 * @name electionsApp.controller:HowtoCtrl
 * @description
 * # HowtoCtrl
 * Controller of the electionsApp
 */
angular.module('electionsApp')
  .controller('HowtoCtrl', function ($scope, $rootScope, $location, $anchorScroll, notifyService, googleInit, $http) {
  	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
	};
	$scope.content = $rootScope.currentLangContent;

	$scope.$watch('$root.currentLangContent', function() {
	    $scope.content = $rootScope.currentLangContent;
	});	

	var map;
	var homeMarker;

	function initialize() {

        var infoWindow = new google.maps.InfoWindow();

        infoWindow.setOptions({
          pixelOffset: new google.maps.Size(0, -45)
        });

		map = new google.maps.Map(document.getElementById('google-map'), {
			center: new google.maps.LatLng(-36.8548985,174.7576697),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel:  false
		});

		var query = 'SELECT * FROM 1Cqaylm63yDu3Z-f-lZLgSsMTUWlfV0GUrGoHW7Ie';

		query = encodeURIComponent(query);
		var url = 'https://www.googleapis.com/fusiontables/v1/query?sql=' + query + '&key=AIzaSyCH8oLPvTi-hzTFL8kcj1zSgN7sSJxk2I4';		

		var createMarker = function(coordinate, type, name, address, description) {

			var image;

			switch (type) {
			    case 'Postbox Lobby':
			    case 'Postbox':
			    	image = 'box-icon.png';
			        break;
			    case 'PostShop':
			    	image = 'shop-icon.png';
			        break;
			    case 'Community Library':
			    case 'Main Library':
			    case 'Service Centre':
			    case 'Council building':
			    	image = 'council-icon.png';
			        break;
			    case 'Special voting':
			    	image = 'special-icon.png';
			        break;
			    case 'Heart box':
			    	image = 'heart-icon.png';
			        break;
			    case 'Love Bus':
			    case 'Love bus':
			    case 'love bus':
			    	image = 'bus-icon.png';
			        break;
			    default:
			    	image = 'council-icon.png';
			    	break;
			}

			var marker = new google.maps.Marker({
					map: map,
					position: coordinate,
					icon: new google.maps.MarkerImage('images/' + image, null, null, null, new google.maps.Size(33,42))
			});
			// custom info window
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.setPosition(coordinate);
				infoWindow.setContent('<strong>' + name + '</strong><br>' + address + '<br><br>' + description + '<br><br><a href="http://maps.google.com/?q=' + encodeURIComponent(address) +'" target="_blank" class="gmap-directions">Get directions here</a>');
				infoWindow.open(map);
			});
		};

  		$http({
			method: 'POST',
			url: url, 
          	dataType: 'jsonp'
		}).then(function(response) {			
			var numRows = response.data.rows.length;
			for (var i = numRows - 1; i >= 0; i--) {
				var item = response.data.rows[i];
			    var stringCoordinates = item[3];
			    var splitCoordinates = stringCoordinates.split(',');
			    var lat = splitCoordinates[0];
			    var lng = splitCoordinates[1];
			    var coordinate = new google.maps.LatLng(lat, lng);

			    var name = item[0];
			    var address = item[1];
			    var type = item[2];
			    var description = item[4];

			    createMarker(coordinate, type, name, address, description);
			}
		});
	}

	googleInit.then(function () {
        // Promised resolved
        initialize();
    }, function () {
        // Promise rejected
        notifyService.show('Could not load Google maps. Please try again later.', 'danger', 5000);
    });

  	function createMarker(latlng) {

	  if(homeMarker !== undefined && homeMarker !== ''){
	    homeMarker.setMap(null);
	    homeMarker = '';
	  }

	  homeMarker = new google.maps.Marker({
	    map: map,
	    position: latlng,
		icon: new google.maps.MarkerImage('images/location-icon.png')
	  });
	  homeMarker.setAnimation(google.maps.Animation.BOUNCE);
	  setTimeout(function(){ homeMarker.setAnimation(null); }, 750);
	}

  	// use found address to search map
  	$scope.noAddress = false;
  	$scope.getAddress = function(item){
		var address = item.currentTarget.innerText;
		$scope.searchAddressInput = address; // update input field to show chosen address
		$scope.noAddress = true;

		var geocoder = new google.maps.Geocoder();

		var request = {
		    address: address,
		    componentRestrictions: {
		        country: 'NZ'
		    }
		};

		geocoder.geocode(request, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				var myResult = results[0].geometry.location; // reference LatLng value

				createMarker(myResult); // call the function that adds the marker

				map.setCenter(myResult);

				map.setZoom(15);
			} else { // if status value is not equal to "google.maps.GeocoderStatus.OK"
				// load error message
				notifyService.show('Sorry an error occurred(' + status + '), please try again later.', 'danger', 5000);
			}
		});

		// remove search results
		$scope.results = false; 
  	};

  	// reset result
  	$scope.resetField = function(){
  		$scope.searchAddressInput = null;
  		$scope.noAddress = false;
  		homeMarker.setMap(null);
  		homeMarker = '';
  	};

  	$scope.legendOpen = false;

  	function mapResize(){
  		var windowWidth = window.innerWidth;
  		$scope.legendOpen = windowWidth > 768 ? true : false;
  	}	

  	mapResize();

  	angular.element(window).bind('resize', function() {
  		$scope.$apply(function() {
  	    	mapResize();
  	    });
  	});

  });
