(function(){
'use strict';
angular.module('LunchCheck',[])	
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.messageText = "";
	$scope.inputText = "";
	var comma = ',';
	$scope.handleMessage = function(){
		if($scope.inputText==""){
			$scope.messageText = "Please enter data first";
		}else{
			if($scope.inputText.split(comma).length <= 3){
				$scope.messageText= "Enjoy!";
			}else{
				$scope.messageText= "Too much!";
			}
		}
	};
}

})();
