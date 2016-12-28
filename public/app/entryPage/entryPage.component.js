(function() {
	'use strict';

	angular
		.module("app")
		.component("entryPage",{
			controller:entryPageCtrl,
			controllerAs:'$ctrl',
			templateUrl:"./app/entryPage/entryPage.html",
		});//end component

	function entryPageCtrl(){
		var self = this;
		
		self.$onInit = init;
		
		function init(){
			self.sliders = [
				{name:"Creativity", value: 50, avg:52.57, prevDay: 20, totalEntries: 290 }, 
				{name:"Mood", value: 20, avg: 21.25, prevDay: 80, totalEntries: 290 },
				{name:"Food Quality", value: 30, avg:80.21, prevDay: 100, totalEntries: 290},
				];
			// console.log("init component entryPage");
		}// end init
		
	}//end controller
	
	entryPageCtrl.inject = [];
	
})();//