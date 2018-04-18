'use strict';

/**
 * @ngdoc service
 * @name electionsApp.ideasService
 * @description
 * # ideasService
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('ideasService', function () {
    return [
  	    { name: 'none', type: '', description: '' },
  	    { name: 'arts, culture and events', type: 'view1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'},
  	    { name: 'community health and safety', type: 'view2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'},
  	    { name: 'environment, sustainability and waste', type: 'view3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'},
  	    { name: 'growth, housing and opportunity', type: 'view4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'},
  	    { name: 'transport and roading', type: 'view5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'},
  	    { name: 'parks, recreation, leisure and libraries', type: 'view6', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'}
    ];
  });
