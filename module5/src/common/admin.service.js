(function () {
"use strict";

angular.module('common')
.service('AdminService', AdminService);


AdminService.$inject = ['$http', 'ApiPath'];
function AdminService($http, ApiPath) {
  var service = this;

  service.saveRegistrationData = function (user) {
    service.user = user;
  };

  service.getRegistrationData = function () {
    return service.user;
    // var config = {};
    // if (shortName) {
    //   config.params = {'shortName': shortName};
    // }

    // return $http.get(ApiPath + '/categories.json').then(function (response) {
    //   return response.data;
    // });
  };


  service.getShortName = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
