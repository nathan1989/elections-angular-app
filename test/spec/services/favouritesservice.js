'use strict';

describe('Service: favouritesService', function () {

  // load the service's module
  beforeEach(module('electionsApp'));

  // instantiate service
  var favouritesService;
  beforeEach(inject(function (_favouritesService_) {
    favouritesService = _favouritesService_;
  }));
});
