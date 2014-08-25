'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('graphApp'));

  var NavCtrl,
    scope,
    $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should have a method to check if the path is active', function() {
    $location.path('/about');
    expect($location.path()).toBe('/about');
    expect(NavCtrl.isActive('/about')).toBe(true);
    expect(NavCtrl.isActive('/')).toBe(false);
  });
});
