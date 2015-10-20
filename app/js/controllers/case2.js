(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.case2',[])
	    .controller('Case2Controller', Case2Controller);

	    Case2Controller.$inject = ['$scope'];

	    function Case2Controller($scope) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				close: function(){
					$scope.$parent.vm.close = false;
				}
			});

	    }

})();