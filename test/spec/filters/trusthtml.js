'use strict';

describe('Filter: trusthtml', function () {

  // load the filter's module
  beforeEach(module('electionsApp'));

  // initialize a new instance of the filter before each test
  var trusthtml;
  beforeEach(inject(function ($filter) {
    trusthtml = $filter('trusthtml');
  }));
});
