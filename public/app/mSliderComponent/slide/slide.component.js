(function() {
	'use strict';

	angular
		.module("app")
		.component("slide",{
			controller:slideCtrl,
			// controllerAs:'$ctrl',
			bindings:{
				value:'=',
			},
			templateUrl:"./app/mSliderComponent/slide/slide.html",
		});//end component

	function slideCtrl($element, $scope){
		var $ctrl = this;
		
		$ctrl.$onInit = init;
		
		function init(){
			// console.log("->", $ctrl);

			$ctrl.splotch = splotch;
			// console.log("init component slide");
			$ctrl.isMouseDown = false;

			$element.on("mousedown", mouseDownHandler);
			$element.on("mousemove", mouseMoveHandler);
			$element.on("mouseup", mouseUpHandler);
			$element.on("mouseleave", mouseUpHandler);

			$ctrl.ownHeight = $element[0].children[0].clientHeight;

			// console.dir($element[0].children[0].clientHeight);

			function mouseDownHandler(e){
				// console.log("Down.",e);
				$ctrl.isMouseDown = true;
				// console.log("Move.", e);
				var y = Math.floor((e.clientY - $element[0].children[0].offsetTop) / $ctrl.ownHeight * 100);
				// console.log("-->", y)
				// var val = 20;
				setValue(y);
			}
			function mouseMoveHandler(e){
				if($ctrl.isMouseDown){
					// console.log("Move.", e);
					var y = Math.floor((e.clientY - $element[0].children[0].offsetTop) / $ctrl.ownHeight * 100);
					// console.log("-->", y)
					// var val = 20;
					setValue(y);
				}
			}
			function mouseUpHandler(e){
				// console.log("Up.",e);
				$ctrl.isMouseDown = false;
				$scope.$apply();
			}

			// render();
		}// end init
		
		function splotch(){
			// console.log("$", $ctrl);
			// console.dir($element[0].clientHeight);
		}

		function setValue(newValue){
			if ((newValue <= 100) && (newValue > -1))
$ctrl.value = Math.round(newValue/10)*10;
			$scope.$apply();
		}

		function render(){

		}

	}//end controller
	
	slideCtrl.inject = ['$element', '$scope'];
	
})();//