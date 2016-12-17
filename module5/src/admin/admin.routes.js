(function() {
'use strict';

angular.module('admin')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('admin', {
      abstract: true,
      templateUrl: 'src/admin/admin.html'
    })
    .state('admin.registration', {
      url: '/admin',
      templateUrl: 'src/admin/registration/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'reg'
    })
    .state('admin.myInfo', {
      templateUrl: 'src/admin/my-info/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfo'
    });
}
})();
