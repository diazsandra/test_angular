myApp.factory('ComputerService', function(){
    return {
        objProc: {
            name: 'Default Proccesor', 
            model: 'Default'
        },
        objHdd: {
            name: 'Default Hdd', 
            model: 'Default'
        },
        objRam: {
            name: 'Default Ram', 
            model: 'Default'
        },
        objGraphic: {
            name: 'Default Graphic', 
            model: 'Default'
        },
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
        addGetProcessor: function() {
            return this.objProc;
        },
        addGetHdd: function() {
            return this.objHdd
        },
        addGetRam: function() {
            return this.objRam
        },
        addGetGraphic: function() {
            return this.objGraphic
        },
        setProcessor: function(proc) {
            this.objProc = proc;
        },
        setHdd: function(hdd) {
            this.objHdd = hdd;
        },
        setRam: function(ram) {
            this.objRam = ram;
        },
        setGraphic: function(graphic) {
            this.objGraphic = graphic;
        },

    }

})