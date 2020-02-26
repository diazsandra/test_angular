myApp.controller('FeaturesController', function($scope, ComputerService, $location, $http) {
    
    $scope.toogleComputer = function () {
        ComputerService.toogleComputer();
    }
    $scope.backPage = function () {
        ComputerService.getProcessor = this.getProcessor;
        ComputerService.getHdd = this.getHdd;
        ComputerService.getRam = this.getRam;
        ComputerService.getGraphic = this.getGraphic;
        $location.path('/home');
    }

    $scope.pcOn = ComputerService.getComputerStatus();

    $scope.getProcessor = ComputerService.getDataPro($http, "https://swapi.co/api/people/", $scope);

    $scope.getHdd = ComputerService.getDataHdd($http, "https://swapi.co/api/starships/", $scope);

    $scope.getRam = ComputerService.getDataRam($http, "https://swapi.co/api/vehicles/", $scope);

    $scope.getGraphic = ComputerService.getDataGrap($http, "https://swapi.co/api/species/", $scope);
  
    $scope.getProcessor = ComputerService.addGetProcessor();

    $scope.getHdd = ComputerService.addGetHdd();

    $scope.getRam = ComputerService.addGetRam();

    $scope.getGraphic = ComputerService.addGetGraphic();
    

});