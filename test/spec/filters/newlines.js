'use strict';

describe('Filter: newLines', function () {

  // load the filter's module
  beforeEach(module('electionsApp'));

  // initialize a new instance of the filter before each test
  var newLines;
  beforeEach(inject(function ($filter) {
    newLines = $filter('newLines');
  }));

});
