(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.case3',[])
	    .controller('Case3Controller', Case3Controller);

	    Case3Controller.$inject = ['$scope'];

	    function Case3Controller($scope) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				close: function(){
					$scope.$parent.vm.close = false;
				}
			});

	    }

})();