(function() {
	'use strict';

	angular
		.module("app")
		.component("handle",{
			controller:handleCtrl,
			// controllerAs:'$ctrl',
			bindings:{
				value:"=",
				parentHeight:"=",
			},
			templateUrl:"./app/mSliderComponent/slide/handle/handle.html",
		});//end component

	function handleCtrl($element, $scope){
		var $ctrl = this;
		var ownHeight = $element[0].children[0].clientHeight;

		// console.log("OwnHeight", ownHeight);
		
		// $ctrl.$onInit = init;

		$scope.$watch(function(){
			return $ctrl.value;
		}, function(oldVal, newVal){
			// console.log("positonUpdate ->", $ctrl.value);
			// $ctrl.style = {
			// 	position:"relative",
			// 	top:$ctrl.value + "px",
			// }
			setPosition($ctrl.value)
		}, true)
	

		function setPosition(value){
			var parentHeight = $ctrl.parentHeight;
			var value = value;
			var percentage = value / 100;
			var newPositon = Math.floor(parentHeight * percentage) - Math.floor((ownHeight/2));
			$ctrl.style = {
				top:newPositon + "px",
			}
			// console.log("%:", percentage, newPositon);
		}

		function render(){
			var val = ($ctrl.mousePos || $ctrl.value);
			// $ctrl.style = {
			// 	"background":"blue",
			// 	"top": (height - val) + "px",
			// }
			// $scope.$digest();
		}

	}//end controller
	
	handleCtrl.inject = ['$element', '$scope'];
	
})();//