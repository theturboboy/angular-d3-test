(function () {

  'use strict';

  /**
   * @ngInject
   */
  function DashboardCtrl ($timeout, Graphs) {
    var that = this;

    this.graph = Graphs.get('population');

    this.row = {
      year: new Date().getFullYear(),
      population: ''
    };

    this.hideMessages = function clearMessages() {
      that.error = null;
      that.success = null;
    };

    this.add = function add(form) {
      if (form.$invalid) {
        that.error = 'All fields are required and must be numbers';
      } else if (that.row.year - 1 !== that.graph.data[that.graph.data.length - 1][0]) {
        that.error = 'Looks like you missed year. All years must be in a row';
      } else {
        that.graph.data.push([parseInt(this.row.year), parseInt(this.row.population)]);

        that.row.year++;
        that.row.population = '';

        that.success = 'Data was successfully added';
      }

      $timeout(function () {
        that.hideMessages();
      }, 3000);
    };

  }

  /**
   * @ngdoc function
   * @name graphApp.controller:DashboardCtrl
   * @description
   * # DashboardCtrl
   * Controller of the graphApp
   */
  angular.module('graphApp')
    .controller('DashboardCtrl', DashboardCtrl);

})();