(function() {
	'use strict';

	angular
		.module("app")
		.component("navi",{
			controller:naviCtrl,
			// controllerAs:'$ctrl',
			bindings:{
				currentPlace:'=',
			},
			templateUrl:"./app/naviComponent/navi.html",
		});//end component

	function naviCtrl(){
		var $ctrl = this;
		
		$ctrl.$onInit = init;
		
		function init(){
			// console.log("->", $ctrl);
			if($ctrl.ngModel){
				$ctrl.currentPlace = $ctrl.currentPlace;
			}

			$ctrl.select = select;
			// console.log("init component navi");
		}// end init

		function select(whatIsSelected){
			$ctrl.currentPlace = whatIsSelected;
		}
		
	}//end controller
	
	naviCtrl.inject = [];
	
})();//