(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });

  // .state('itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/menuapp/templates/items.template.html',
  //   controller: 'ItemsController as items',
  //   resolve: {
  //     item: ['$stateParams', 'ShoppingListService',
  //           function ($stateParams, ShoppingListService) {
  //             return ShoppingListService.getItems()
  //               .then(function (items) {
  //                 return items[$stateParams.itemId];
  //               });
  //           }]
  //   }
  // });
}

})();
