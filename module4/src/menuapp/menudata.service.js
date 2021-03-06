(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$q', '$http','ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;

  // List of categories
  var categories = [];

  // Returns a promise, NOT categories array directly
  service.getAllCategories = function () {
    var categoriesThusFar =[];
    function contains(element1, index1, array1){
      if(array1.length==0){
        return 0;
      }
      return (array1[index1].short_name.indexOf(this.short_name.toLowerCase()) === 0);
    }
    function isNewSubstring(element,index,array){
      var doesContain = (categoriesThusFar.filter(contains, element).length>0);
      if(!doesContain){
        categoriesThusFar.push(element);
      }

      return doesContain;
    }
    var deferred = $q.defer();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      response.data.filter(isNewSubstring);
      categories=categoriesThusFar;
      deferred.resolve(categories);
      return deferred.promise;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    var categoriesThusFar =[];
    function isInCategory(element,index,array){
      var lenPrefixToDigits = array[index].short_name.search(/[0-9]/);
      var prefixToDigits=array[index].short_name.substr(0,lenPrefixToDigits);
      if(!categoryShortName.endsWith(prefixToDigits)){
        return false;
      }
      return (prefixToDigits.indexOf(categoryShortName)===0);
      // return (array[index].short_name.indexOf(categoryShortName)!==-1);
    }
    var deferred = $q.defer();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      var items = response.data.menu_items.filter(isInCategory);
      deferred.resolve(items);
      return deferred.promise;
    });
  };

}

})();
