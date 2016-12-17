(function () {

angular.module('admin')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['AdminService','ApiPath'];
function MyInfoController(AdminService,ApiPath) {
  var myInfo = this;

  myInfo.user = AdminService.getRegistrationData();
  myInfo.basePath = ApiPath;
  myInfo.completed = myInfo.user ? true : false;
}

})();
