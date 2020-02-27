myApp.controller('HomeController', HomeController);
HomeController.$inject = ['$scope', 'ComputerService', '$location'];

function HomeController($scope, ComputerService, $location) {
    // Default values
    $scope.objProc = ComputerService.objProc;
    $scope.objHdd = ComputerService.objHdd;
    $scope.objRam = ComputerService.objRam;
    $scope.objGraphic = ComputerService.objGraphic;
    // Disable tools
    $scope.pcOn = ComputerService.computerStatus;
    $scope.toogleComputer = function () {
        ComputerService.toogleComputer();
    }
    // Change page on clikc tools 
    $scope.changePageFromTools = function () {
        $location.path('/features')
    }
    // Power button proccess
    $scope.changePageFromPower = function () {
        ComputerService.computerStatus = !ComputerService.computerStatus;
        this.computerStatus = !this.computerStatus
        $scope.pcOn = ComputerService.computerStatus;
        //$location.path('/features')
        if(ComputerService.computerStatus) {
            $scope.myObj = {
                "background-color" : "green",
                "border" : "1px solid green",
                "transition": "1s"
            }
        } else {
            $scope.myObj = {
                "background-color" : "#000",
                "border" : "1px solid #000",
                "transition": "1s"
            }
        }
    }
    // Get color for power button 
    if(ComputerService.computerStatus) {
        $scope.myObj = {
            "background-color" : "green",
            "border" : "1px solid green"
        }
    }
};