'use strict';

describe('Controller: CandidatesearchCtrl', function () {

  // load the controller's module
  beforeEach(module('electionsApp'));

  var CandidatesearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidatesearchCtrl = $controller('CandidatesearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
