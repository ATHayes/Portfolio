'use strict';

describe('Controller: Is2215Ctrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var Is2215Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Is2215Ctrl = $controller('Is2215Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
