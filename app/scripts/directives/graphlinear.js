(function () {

  'use strict';

  /**
   * @ngInject
   */
  function graphLinear () {
    return {
      template: '<svg class="graph-linear"></svg>',
      restrict: 'E',
      replace: true,
      scope: {
        graph: '=data'
      },
      link: function postLink(scope, $element) {
        var svg = d3.select($element[0]),
          width = $element.width(),
          height = $element.height(),
          padding = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 70
          },
          xAxis,
          yAxis,
          lineFun;

        function setChartParameters() {

          var xScale = d3.scale.linear().range([padding.left, width - padding.right]).domain([d3.min(scope.graph.data, function(d) {
              return d[0];
            }), d3.max(scope.graph.data, function(d) {
              return d[0];
            })]),

            yScale = d3.scale.linear().range([height - padding.top, padding.bottom]).domain([d3.min(scope.graph.data, function(d) {
              return d[1] - d[1] * 0.01;
            }), d3.max(scope.graph.data, function(d) {
              return d[1] + d[1] * 0.01;
            })]);

          xAxis = d3.svg.axis()
            .scale(xScale)
            .tickSize(1)
            .tickFormat(d3.format('d'))
            .tickSubdivide(true);

          yAxis = d3.svg.axis()
            .scale(yScale)
            .tickSize(1)
            .orient('left')
            .tickSubdivide(true);

          lineFun = d3.svg.line()
            .x(function (d) {
              return xScale(d[0]);
            })
            .y(function (d) {
              return yScale(d[1]);
            })
            .interpolate('basis');
        }

        function drawLineChart() {

          setChartParameters();

          svg.append('svg:g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (height - padding.bottom) + ')')
            .call(xAxis);

          svg.append('svg:g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + (padding.left) + ',0)')
            .call(yAxis);

          svg.append('svg:path')
            .attr({
              d: lineFun(scope.graph.data),
              stroke: 'blue',
              'stroke-width': 2,
              fill: 'none',
              class: 'path'
            });
        }

        function redrawLineChart() {

          setChartParameters();

          svg.selectAll('g.y.axis').call(yAxis);

          svg.selectAll('g.x.axis').call(xAxis);

          svg.selectAll('.path')
            .attr({
              d: lineFun(scope.graph.data)
            });
        }

        drawLineChart();

        scope.$watch('graph', function(){
          redrawLineChart();
        }, true);

      }
    };
  }

  /**
   * @ngdoc directive
   * @name graphApp.directive:graphLinear
   * @description
   * # graphLinear
   */
  angular.module('graphApp')
    .directive('graphLinear', graphLinear);

})();