'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('graphApp'));

  var DashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Graphs) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope,
      Graphs: Graphs
    });
  }));

  it('should be defined', function () {
    expect(!!DashboardCtrl).toBeDefined();
  });

  it('should get graph, which has at list one row', function () {
    expect(DashboardCtrl.graph).toBeDefined();
    expect(DashboardCtrl.graph.data.length).toBeGreaterThan(0);
  });

  it('should has data for new row', function () {
    expect(DashboardCtrl.row).toBeDefined();
    expect(DashboardCtrl.row.year).toEqual(new Date().getFullYear());
    expect(DashboardCtrl.row.population).toEqual('');
  });

  it('should return error if new row invalid', function() {
    DashboardCtrl.add({$invalid: true});
    expect(DashboardCtrl.error).not.toBeUndefined();
  });

  it('should clear errors and success messages', function() {
    DashboardCtrl.error = true;
    DashboardCtrl.success = true;
    DashboardCtrl.hideMessages();
    expect(DashboardCtrl.error).toBeNull();
    expect(DashboardCtrl.success).toBeNull();
  });

  it('should accept only next year', function() {
    DashboardCtrl.row.year = new Date().getFullYear();
    DashboardCtrl.add({});
    expect(DashboardCtrl.error).toBeUndefined();

    DashboardCtrl.row.year = DashboardCtrl.row.year + 2;
    DashboardCtrl.add({});
    expect(DashboardCtrl.error).not.toBeNull();
  });

  it('row should be increased after adding', function() {
    DashboardCtrl.row.year = new Date().getFullYear();
    DashboardCtrl.add({});
    expect(DashboardCtrl.row.year).toEqual((new Date().getFullYear() + 1));
  });

  it('should clear population after adding', function() {
    DashboardCtrl.row.population = 1000;
    DashboardCtrl.add({});
    expect(DashboardCtrl.row.population).toEqual('');
  });
});
