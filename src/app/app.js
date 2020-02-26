var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) { 
    $routeProvider 
        .when('/home', { 
            controller: 'HomeController', 
            templateUrl: 'app/pages/home/home.html' 
        }) 
        .when('/features', { 
            controller: 'FeaturesController', 
            templateUrl: 'app/pages/features/features.html' 
        })  
        .otherwise({ 
            redirectTo: '/' 
    }); 
}); 