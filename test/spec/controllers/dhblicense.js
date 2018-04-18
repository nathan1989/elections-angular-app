'use strict';

describe('Controller: DhblicenseCtrl', function () {

  // load the controller's module
  beforeEach(module('electionsApp'));

  var DhblicenseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DhblicenseCtrl = $controller('DhblicenseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
