'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('graphApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should be defined', function () {
    expect(!!AboutCtrl).toBe(true);
  });
});
