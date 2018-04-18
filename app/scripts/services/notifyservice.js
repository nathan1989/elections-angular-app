'use strict';

/**
 * @ngdoc service
 * @name electionsApp.notifyService
 * @description
 * # notifyService
 * Service in the electionsApp.
 */
angular.module('electionsApp')
  .service('notifyService', function () {    

    var data = [];

  	data.show = function(notifyMessage, notifyStatus, notifyTimeout) {
	    return UIkit.notify({
		        message : notifyMessage,
		        status  : notifyStatus,
		        timeout : notifyTimeout,
		        pos     : 'top-center'
			   });
	};

	return data;
  });
