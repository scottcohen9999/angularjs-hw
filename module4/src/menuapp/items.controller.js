(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['items']
function ItemsController(items) {
  var itemsList = this;
  itemsList.items = items;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
