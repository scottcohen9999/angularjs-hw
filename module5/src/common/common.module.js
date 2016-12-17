(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://scottcohen9999-angularjs-hw.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
