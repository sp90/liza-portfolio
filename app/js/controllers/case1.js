(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.case1',[])
	    .controller('Case1Controller', Case1Controller);

	    Case1Controller.$inject = ['$scope'];

	    function Case1Controller($scope) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				
			});

	    }

})();