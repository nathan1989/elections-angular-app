'use strict';

/**
 * @ngdoc service
 * @name electionsApp.addressService
 * @description
 * # addressService
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('addressService', function ($http, $location, acUrl) {
    var service = [];

    // A service which searches for addresses from AC API
    service.search = function(address, soapType){
    	var numberOfItemsToReturn = 10;    	
	    var soapMessage = String.fromCharCode(60) + '?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><' + soapType + ' xmlns="http://www.manukau.govt.nz"><searchString>' + address + '</searchString><resultCount>' + numberOfItemsToReturn + '</resultCount><wsUrl>' + acUrl.soap + '</wsUrl><proxyBypassAddress></proxyBypassAddress><proxyAddress></proxyAddress></' + soapType + '></s:Body></s:Envelope>';

		return $http({
				method: 'POST', 
				timeout : 5000, 
				url: acUrl.propertyLocator, 
				headers: { 'Content-Type': 'text/xml'},
				data: soapMessage 
			}).then(function(response) {
				var getResults  = xmlToJSON.parseString(response.data); // convert to JSON
				var results;
				if(soapType === 'DoAddressSearch'){
					results = getResults.Envelope[0].Body[0].DoAddressSearchResponse[0].DoAddressSearchResult[0].Envelope[0].Body[0].DoAddressSearchResponse[0].DoAddressSearchResult[0].SearchResults[0].SearchResult;						
				} else {
					results = getResults.Envelope[0].Body[0].DoRatesInfoAddressSearchResponse[0].DoRatesInfoAddressSearchResult[0].Envelope[0].Body[0].DoRatesInfoAddressSearchResponse[0].DoRatesInfoAddressSearchResult[0].SearchResults[0].SearchResult;					
				}

				if(results === undefined){
					return false;
				} else {
			  		return results;					
				}
			});
    };

    return service;
  });
