myApp.controller('HomeController', HomeController);
HomeController.$inject = ['$scope', 'ComputerService', '$location'];

function HomeController($scope, ComputerService, $location) {
    console.log(ComputerService.computerStatus, ComputerService.getProcessor, '*****Home Controller')
    $scope.toogleComputer = function () {
        ComputerService.toogleComputer();
    }
    $scope.changePageFromTools = function () {
        $location.path('/features')
    }
    $scope.changePageFromPower = function () {
        ComputerService.computerStatus = !ComputerService.computerStatus;
        this.computerStatus = !this.computerStatus
        //$location.path('/features')
        if(ComputerService.computerStatus) {
            $scope.myObj = {
                "background-color" : "green",
                "border" : "1px solid green"
            }
        } else {
            $scope.myObj = {
                "background-color" : "#000",
                "border" : "1px solid #000"
            }
        }
    }

    $scope.pcOn = ComputerService.getComputerStatus();

    if(ComputerService.computerStatus) {
        $scope.myObj = {
            "background-color" : "green",
            "border" : "1px solid green"
        }
    }
    
};