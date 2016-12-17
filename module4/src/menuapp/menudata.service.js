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
      return (array1[index1].indexOf(element1.toLowerCase()) === element1.length);
    }
    function isNewSubstring(element,index,array){
      var doesContain = (categoriesThusFar.filter(contains).length>0);
      if(!doesContain){
        categoriesThusFar.push(element.short_name);
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
}

})();
