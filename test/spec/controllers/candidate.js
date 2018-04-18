'use strict';

describe('Controller: CandidateCtrl', function () {

  // load the controller's module
  beforeEach(module('electionsApp'));

  var CandidateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateCtrl = $controller('CandidateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
