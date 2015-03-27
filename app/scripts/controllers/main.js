'use strict';

angular.module('ghUserInfoApp')
  .controller('MainCtrl', function($scope, $location) {
    $scope.search = function() {
      var username = $scope.username;

      $location.path('search/' + encodeURIComponent(username));
    };
  });
