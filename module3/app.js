(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      searchTerm:  '<',
      found: '<',
      onRemove: '&',
      foundMenuItems: '='
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService', '$http', 'ApiBasePath'];
function NarrowItDownController(MenuSearchService,$http, ApiBasePath) {
  var menu = this;

  menu.getMatchedMenuItems = function (searchTerm) {
    if(!searchTerm){
      menu.found = [];
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (response) {
      menu.found = response;//.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
  });
  };
  menu.onRemove = function (itemIndex) {
    menu.found.splice(itemIndex.index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
   var items = [];
  service.getMatchedMenuItems = function (searchTerm) {
    function isSubstring(element,index,array){
      return(element.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      var foundItems = response.data.menu_items.filter(isSubstring);
      return foundItems;
    });
  };

}

})();
