(function(){

  var app = angular.module("spa", []);
  var remoteDomain = "http://localhost:3000/";

  app.config(function($httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        //Remove the header used to identify ajax call  that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

  app.controller("loginController", function ($scope, $http){
    var usuario = {
      login: $scope.correo,
      passwd: $scope.contrasena
    };
    $http.post(remoteDomain+"login",usuario).success( function(response) {
      $scope.usuario.nombre = response;
    }).error(function(m) {
      console.log(m);
    });

  });  

})();
