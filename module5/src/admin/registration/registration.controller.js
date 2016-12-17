(function () {

angular.module('admin')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['AdminService', '$timeout'];
function RegistrationController(AdminService, $timeout) {
  var reg = this;

  reg.submit = function (user) {
  	user.favShortName=user.favShortName.toUpperCase();
    AdminService.getMenuItem(user.favShortName).then(function (response) {
	  	user.menuItem = response.data;
	  	AdminService.saveRegistrationData(user);

	  	reg.noSuchShortName = false;
    	reg.completed = true;
      	console.log('saved data true response');
    },
    function (response) {
		reg.noSuchShortName = true;
		reg.completed = false;
      	console.log('did NOT save data;');
    });
    $timeout(function(){},5000);
  };
}

})();
