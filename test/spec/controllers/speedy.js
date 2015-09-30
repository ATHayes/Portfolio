'use strict';

describe('Controller: SpeedyCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var SpeedyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeedyCtrl = $controller('SpeedyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
