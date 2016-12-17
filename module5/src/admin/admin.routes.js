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
    // .state('admin.home', {
    //   url: '/',
    //   templateUrl: 'src/public/home/home.html'
    // })
    .state('admin.registration', {
      url: '/admin',
      templateUrl: 'src/admin/registration/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'reg'
      // resolve: {
      //   menuCategories: ['MenuService', function (MenuService) {
      //     return MenuService.getCategories();
      //   }]
      // }
    })
    .state('admin.myInfo', {
      url: '/menu/{category}',
      templateUrl: 'src/admin/my-info/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfo'
      // resolve: {
    //     menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
    //       return MenuService.getMenuItems($stateParams.category);
    //     }]
    //   }
    });
}
})();
