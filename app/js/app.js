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
        .config(['$locationProvider','$stateProvider','$urlRouterProvider', Config]);

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
                url: "/case1", 
                templateUrl: "partials/case1.html", 
                controller: 'Case1Controller',
                controllerAs: 'vm'
            })
            .state('case2', {
                url: "/case2", 
                templateUrl: "partials/case2.html", 
                controller: 'Case2Controller',
                controllerAs: 'vm'
            })
            .state('case3', {
                url: "/case3", 
                templateUrl: "partials/case3.html", 
                controller: 'Case2Controller',
                controllerAs: 'vm'
            })
            .state('case4', {
                url: "/case4", 
                templateUrl: "partials/case4.html", 
                controller: 'Case2Controller',
                controllerAs: 'vm'
            }); 

        $urlRouterProvider 
            .otherwise("/");
    }
})(); 