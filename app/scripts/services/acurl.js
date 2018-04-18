'use strict';

/**
 * @ngdoc service
 * @name electionsApp.acUrl
 * @description
 * # acUrl
 * Constant in the electionsApp.
 */
angular.module('electionsApp')
  .constant('acUrl', {
  	'propertyLocator' : 'http://www.aucklandcouncil.govt.nz/_vti_bin/propertysearch.asmx',
  	// 'soap' : 'http://mapws.aucklandcouncil.govt.nz/ServiceCentre/ARCSearchService.svc/SearchSoap',
  	'soap' : 'http://ratews.aucklandcouncil.govt.nz/ACServiceCentre/ARCSearchService.svc/SearchSoap',
  	'wardBoard' : 'http://maps.aucklandcouncil.govt.nz/ArcGIS/rest/services/Applications/ACWebsite/MapServer/1/query?f=json&where=&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A',
  	'wardBoardEnd' : '%2C%22spatialReference%22%3A%7B%22wkid%22%3A2193%7D%7D&geometryType=esriGeometryPoint&inSR=2193&outFields=Board%2CWard%2CSubdivision',
  	'geometry' : 'http://maps.aucklandcouncil.govt.nz/ArcGIS/rest/services/Applications/ACWebsite/MapServer/2/query?f=json&where=SEARCHADDRESS%20%3D%20%27',
  	'geometryEnd' : '%27&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=SEARCHADDRESS'
  });
