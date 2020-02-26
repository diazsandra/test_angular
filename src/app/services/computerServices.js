myApp.factory('ComputerService', function(){
    return {
        computerStatus: false,
        toogleComputer: function() {
            this.computerStatus = !this.computerStatus
        },
        getComputerStatus: function() {
            return this.computerStatus;
        },
        getDataPro: function(http, url, scope) {
            http.get(url).success(function(response){
                return scope.processors = response.results;
            });
        },
        getDataHdd: function(http, url, scope) {
            http.get(url).success(function(response){
                return scope.hdds = response.results;
            });
        },
        getDataRam: function(http, url, scope) {
            http.get(url).success(function(response){
                return scope.rams = response.results;
            });
        },
        getDataGrap: function(http, url, scope) {
            http.get(url).success(function(response){
                return scope.graphics = response.results;
            });
        },
        getProcessor: "Por default",
        addGetProcessor: function() {
            return this.getProcessor
        },
        getHdd: "Por default",
        addGetHdd: function() {
            return this.getHdd
        },
        getRam: "Por default",
        addGetRam: function() {
            return this.getRam
        },
        getGraphic: "Por default",
        addGetGraphic: function() {
            return this.getGraphic
        }


    }

})