'use strict';

describe('Controller: Is2204Ctrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var Is2204Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Is2204Ctrl = $controller('Is2204Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
