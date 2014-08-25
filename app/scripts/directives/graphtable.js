(function () {

  'use strict';

  /**
   * @ngInject
   */
  function graphTable () {
    return {
      templateUrl: 'views/directives/graphtable.html',
      restrict: 'E',
      replace: true,
      scope: {
        graph: '=data'
      },
      link: function postLink() {

      }
    };
  }

  /**
   * @ngdoc directive
   * @name graphApp.directive:graphTable
   * @description
   * # graphTable
   */
  angular.module('graphApp')
    .directive('graphTable', graphTable);

})();