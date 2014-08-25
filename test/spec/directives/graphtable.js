'use strict';

describe('Directive: graphTable', function () {

  // load the directive's module
  beforeEach(module('graphApp'));
  // load template
  beforeEach(module('template'));

  var element,
    scope;

  beforeEach(inject(function ($templateCache, $rootScope, $compile, Graphs) {
    scope = $rootScope.$new();
    scope.graph = Graphs.get();

    element = angular.element('<graph-table data="graph"></graph-table>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should replace directive with table', inject(function () {
    expect(element[0].tagName.toLowerCase()).toBe('table');
  }));

  it('should has headers', inject(function () {
    expect(element.find('th').length).toBe(scope.graph.data[0].length);
  }));

  it('rows count should be the same as item counts', inject(function () {
    expect(element.find('tr').length).toBe(scope.graph.data.length + 1);
  }));

});
