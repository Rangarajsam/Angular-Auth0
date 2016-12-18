(function(){
    
    angular.module("authApp")
    .controller("profileController",['$http',profileController]);
    function profileController($http){
        var vm=this;
        vm.message="hello";
    }
})();