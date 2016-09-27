(function(){
'use strict'

angular.module('CheckOffShoppingListApp',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
	var tobuy=this;
	tobuy.checkOff=function(indexOfToBuy){
		ShoppingListCheckOffService.checkOff(indexOfToBuy);
	}
	tobuy.isEmpty=function(){
		return ShoppingListCheckOffService.isToBuyEmpty();
	}
	tobuy.itemsToBuy = ShoppingListCheckOffService.getToBuyItems();
};

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
	var alreadyBought = this;

	alreadyBought.isEmpty=function(){
		return ShoppingListCheckOffService.isBoughtEmpty();
	}
	alreadyBought.itemsBought = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService(){
	var ShoppingListCheckOffService=this;
	var itemsToBuy=[
		{ name: "Cookies1", quantity: 10	},
		{ name: "Cookies2", quantity: 20	},
		{ name: "Cookies3", quantity: 30	},
		{ name: "Cookies4", quantity: 40	},
		{ name: "Cookies5", quantity: 50	}
	];
	var itemsBought=[];
	ShoppingListCheckOffService.checkOff = function(indexOfToBuy){
		itemsBought.push(itemsToBuy[indexOfToBuy]);
		itemsToBuy.splice(indexOfToBuy,1);
	}
	ShoppingListCheckOffService.getBoughtItems=function(){
		return itemsBought;
	}
	ShoppingListCheckOffService.getToBuyItems=function(){
		return itemsToBuy;
	}
	ShoppingListCheckOffService.isToBuyEmpty=function(){
		return itemsToBuy.length == 0;
	}
	ShoppingListCheckOffService.isBoughtEmpty=function(){
		return itemsBought.length == 0;
	}
};


})();
