(function() {
	'use strict';

	angular
		.module("app")
		.component("mainComponent",{
			controller:mainComponentCtrl,
			// controllerAs:'$ctrl',
			templateUrl:"./app/mainComponent/main.html",
		});//end component

	function mainComponentCtrl(){
		var self = this;
		
		self.$onInit = init;

		self.selected = "data-entry";
		
		function init(){
			console.log("init component mainComponent");
		}// end init
		
	}//end controller
	
	mainComponentCtrl.inject = [];
	
})();//