(function () {

angular.module('admin')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['AdminService'];
function RegistrationController(AdminService) {
  var reg = this;

  reg.submit = function (user) {
  	AdminService.saveRegistrationData(user);

    reg.completed = true;
  };
}

})();
