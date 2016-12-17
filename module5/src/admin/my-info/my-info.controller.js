(function () {

angular.module('admin')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['AdminService'];
function MyInfoController(AdminService) {
  var myInfo = this;

  myInfo.user = AdminService.getRegistrationData();
}

})();
