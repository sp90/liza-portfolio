(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.nav',[])
	    .controller('NavController', NavController);

	    NavController.$inject = ['$scope', '$state'];

	    function NavController($scope, $state) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				states: ['case1', 'case2', 'case3', 'case4'],
				state: 0,
				close: false,
				scollTop: function(){
					window.scrollTo(0, 0);
				},
				next: function(){
					var statesLen = vm.states.length - 1;
					if(statesLen < vm.state + 1) {
						vm.state = 0;
					} else {
						vm.state = vm.state + 1;
					}
					//console.log(vm.states[vm.state]);
					$state.go(vm.states[vm.state]);
				},
				prev: function(){
					var statesLen = vm.states.length - 1;
					if(0 > vm.state - 1) {
						vm.state = statesLen;
					} else {
						vm.state = vm.state - 1;
					}
					//console.log(vm.states[vm.state]);
					$state.go(vm.states[vm.state]);
				}
			});

			$scope.$watch('close', function(n){
				console.log("n: ", n);
			});
			
			$scope.$watch(function(){
				return $state.current;
			}, function(n) {
				angular.extend(vm,{
					state: vm.states.indexOf(n.name)
				});
			}, true);

	    }

})();