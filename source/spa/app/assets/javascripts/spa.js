var app = angular.module("spa", []);
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
	$http.post("http://localhost:3000/login",usuario).success( function(response) {
												$scope.usuario.nombre = response;
											})
											.error(function() {
    											console.log("error");
											});
});