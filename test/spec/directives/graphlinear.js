'use strict';

describe('Directive: graphLinear', function () {

  // load the directive's module
  beforeEach(module('graphApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile, Graphs) {
    scope = $rootScope.$new();
    scope.graph = Graphs.get();

    element = angular.element('<graph-linear data="graph"></graph-linear>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should be replaced with svg', inject(function () {
    expect(element[0].tagName.toLowerCase()).toBe('svg');
  }));

});
