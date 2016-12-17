(function () {
"use strict";

angular.module('common')
.service('AdminService', AdminService);


AdminService.$inject = ['$http', 'ApiPath','$timeout'];
function AdminService($http, ApiPath, $timeout) {
  var service = this;

  service.saveRegistrationData = function (user) {
    service.user = user;
  };

  service.getRegistrationData = function () {
    return service.user;
  };

  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/'+ shortName + '.json');
  };
}



})();
