'use strict';

angular.module('ghUserInfoApp')
  .controller('ResultCtrl', function($scope, $routeParams, GitHubResource) {
    var username = $routeParams.username;

    GitHubResource.get({ user: username, repo: '' }).$promise
      .then(function(res) {
        $scope.user = res;
      });

    GitHubResource.get({ user: username }).$promise
      .then(function(res) {
        $scope.repos = res;
      });
  });
