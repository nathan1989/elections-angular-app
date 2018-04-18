'use strict';

describe('Service: language', function () {

  // load the service's module
  beforeEach(module('electionsApp'));

  // instantiate service
  var language;
  beforeEach(inject(function (_language_) {
    language = _language_;
  }));
});
