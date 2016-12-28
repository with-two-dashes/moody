(function() {
	'use strict';

	angular
		.module("app")
		.component("mSlider",{
			controller:mSliderCtrl,
			// controllerAs:'$ctrl',
			bindings:{
				ngModel:'=',
			},
			templateUrl:"./app/mSliderComponent/mSlider.html",
		});//end component

	function mSliderCtrl(){
		var $ctrl = this;
		
		$ctrl.$onInit = init;
		
		function init(){
			// console.log("->", $ctrl);
			if($ctrl.ngModel){
				$ctrl.name = $ctrl.ngModel.name;
				$ctrl.value = $ctrl.ngModel.value;
				$ctrl.total = $ctrl.ngModel.totalEntries;
				$ctrl.prevDay = $ctrl.ngModel.prevDay;
				$ctrl.avg = $ctrl.ngModel.avg;
			}

			// console.log("init component mSlider");
		}// end init
		
	}//end controller
	
	mSliderCtrl.inject = [];
	
})();//