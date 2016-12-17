(function () {

angular.module('admin')
.controller('MyInfoController', MyInfoController);

function MyInfoController() {
  var myInfo = this;

  myInfo.submit = function () {
    myInfo.completed = true;
  };
}

})();
