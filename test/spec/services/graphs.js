'use strict';

describe('Service: Graphs', function () {

  // load the service's module
  beforeEach(module('graphApp'));

  // instantiate service
  var Graphs;
  beforeEach(inject(function (_Graphs_) {
    Graphs = _Graphs_;
  }));

  it('should return graph', function () {
    expect(Graphs.get()).not.toBeUndefined();
  });

});
