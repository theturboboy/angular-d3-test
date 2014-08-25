(function () {

  'use strict';

  /**
   * @ngInject
   */
  function Graphs() {

    /*
     Usually it's easy to interact with RESTful server-side data sources using$resource

     return $resource('/graphs/:id', {id: '@id'},
     {
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
     });
     */

    var data = {
      id: 'population',
      name: 'Population',
      type: 'line',
      labels: ['Year', 'Population'],
      data: [
        [2010, 9500000],
        [2011, 9481000],
        [2012, 9465000],
        [2013, 9463000]
      ]
    };

    return {
      get: function() {
        return data;
      }
    };

  }

  /**
   * @ngdoc service
   * @name graphApp.Graphs
   * @description
   * # Graphs
   * Service in the graphApp.
   */
  angular.module('graphApp')
    .service('Graphs', Graphs);

})();