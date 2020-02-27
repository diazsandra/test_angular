myApp.controller('FeaturesController', function($scope, ComputerService, $location, $http) {
    $scope.toogleComputer = function () {
        ComputerService.toogleComputer();
    }
    // Back to home
    $scope.backPage = function () {
        // Mantain Sets
        ComputerService.setProcessor(this.getProcessor);
        ComputerService.setHdd(this.getHdd);
        ComputerService.setRam(this.getRam);
        ComputerService.setGraphic(this.getGraphic);
        $location.path('/home');
    }
    // Disable status
    $scope.pcOn = ComputerService.getComputerStatus();
    // Get data
    $scope.getProcessor = ComputerService.getDataPro($http, "https://swapi.co/api/people/", $scope);
    $scope.getHdd = ComputerService.getDataHdd($http, "https://swapi.co/api/starships/", $scope);
    $scope.getRam = ComputerService.getDataRam($http, "https://swapi.co/api/vehicles/", $scope);
    $scope.getGraphic = ComputerService.getDataGrap($http, "https://swapi.co/api/species/", $scope);
    // Set Model
    $scope.getProcessor = ComputerService.addGetProcessor();
    $scope.getHdd = ComputerService.addGetHdd();
    $scope.getRam = ComputerService.addGetRam();
    $scope.getGraphic = ComputerService.addGetGraphic();

});