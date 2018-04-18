'use strict';

describe('Service: shareData', function () {

  // load the service's module
  beforeEach(module('electionsApp'));

  // instantiate service
  var shareData;
  beforeEach(inject(function (_shareData_) {
    shareData = _shareData_;
  }));
});
