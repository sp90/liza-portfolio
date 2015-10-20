(function() {
    'use strict';

    angular
        .module('app',[
            'ui.router',
            'ngAnimate',
            'app.controller.index',
            'app.controller.case1',
            'app.controller.case2',
            'app.controller.case3',
            'app.controller.case4',
            'app.controller.nav'
        ])
        .config(['$locationProvider','$stateProvider','$urlRouterProvider', Config])
        .run(['$rootScope', '$state', Run]);

    function Config($locationProvider, $stateProvider, $urlRouterProvider) {
         
        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('index', {
                url: "/", 
                templateUrl: "partials/index.html", 
                controller: 'IndexController',
                controllerAs: 'vm'
            })
            .state('case1', {
                url: "/grafisk-design", 
                templateUrl: "partials/case1.html", 
                controller: 'Case1Controller',
                controllerAs: 'vm'
            })
            .state('case2', {
                url: "/grafisk-workflow", 
                templateUrl: "partials/case2.html", 
                controller: 'Case1Controller',
                controllerAs: 'vm'
            })
            .state('case3', {
                url: "/grafik-og-billedbehandling", 
                templateUrl: "partials/case3.html", 
                controller: 'Case1Controller',
                controllerAs: 'vm'
            })
            .state('case4', {
                url: "/typografi-og-ombrydning", 
                templateUrl: "partials/case4.html", 
                controller: 'Case1Controller',
                controllerAs: 'vm'
            }); 

        $urlRouterProvider 
            .otherwise("/");
    }
    function Run($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.name == 'index') {
                evt.preventDefault();
                $state.go('case1');
            }
        });
    };
})(); 