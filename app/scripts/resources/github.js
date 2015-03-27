'use strict';

angular.module('ghUserInfoApp')
  .factory('GitHubResource', function($resource) {
    return $resource(
      'https://api.github.com/:query/:user/:repo/:spec', {
        'query': 'users',
        'user': '',
        'repo': 'repos',
        'spec': '',
        'callback': 'JSON_CALLBACK',
        'per_page': 100
      }, {
        'get': { 'method': 'JSONP' }
      }
    );
  });
