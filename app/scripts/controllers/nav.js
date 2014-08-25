(function () {

  'use strict';

  /**
   * @ngInject
   */
  function NavCtrl ($location) {

    this.isActive = function(path) {
      return $location.path() === path;
    };

  }

  /**
   * @ngdoc function
   * @name graphApp.controller:NavCtrl
   * @description
   * # NavCtrl
   * Controller of the graphApp
   */
  angular.module('graphApp')
    .controller('NavCtrl', NavCtrl);

})();