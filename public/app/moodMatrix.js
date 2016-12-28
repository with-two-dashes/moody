(function() {
'use strict';

	angular
		.module('app')
		.factory('moodMatrix', moodMatrix);

	moodMatrix.$inject = ['$log'];
	function moodMatrix($log) {
		var service = {
			addToDiary:addToDiary,
			loadDiary:loadDiary,
			findEntry:findEntry,
		};
		
		return service;

		////////////////
		function addToDiary(date, text) { 

		}
		function loadDiary(){

		}
		function findEntry(id){

		}
	}
})();