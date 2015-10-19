(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.nav',[])
	    .controller('NavController', NavController);

	    NavController.$inject = ['$scope'];

	    function NavController($scope) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				states: ['case1', 'case2', 'case3', 'case4'],
				state: 0,
				next: function(){
					var statesLen = vm.states.length - 1;
					console.log(vm.state);
					if(statesLen < vm.state + 1) {
						vm.state = 0;
					} else {
						vm.state = vm.state + 1;
					}
				},
				prev: function(){
					var statesLen = vm.states.length - 1;
					console.log(vm.state);
					if(0 > vm.state - 1) {
						vm.state = statesLen;
					} else {
						vm.state = vm.state - 1;
					}
				}
			});

	    }

})();