'use strict';

describe('Controller: RankedCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var RankedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankedCtrl = $controller('RankedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
