'use strict';

/**
 * @ngdoc service
 * @name electionsApp.candidateData
 * @description
 * # candidateData
 * Constant in the electionsApp.
 */
angular.module('electionsApp')
  .constant('candidateData', {
  	'mayor' : 'https://candidate.showyourlove.co.nz/app/api/GetMayor?ReturnDetails=true',
  	'ward' : 'https://candidate.showyourlove.co.nz/app/api/GetWard?ReturnDetails=true',
  	'board' : 'https://candidate.showyourlove.co.nz/app/api/GetBoard?ReturnDetails=true',
  	'dhb' : 'https://candidate.showyourlove.co.nz/app/api/GetDHB?ReturnDetails=true',
  	'license' : 'https://candidate.showyourlove.co.nz/app/api/GetTrust?ReturnDetails=true'
  });
