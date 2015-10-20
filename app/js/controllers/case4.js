(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.case4',[])
	    .controller('Case4Controller', Case4Controller);

	    Case4Controller.$inject = ['$scope'];

	    function Case4Controller($scope) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				close: function(){
					$scope.$parent.vm.close = false;
				}
			});

	    }

})();