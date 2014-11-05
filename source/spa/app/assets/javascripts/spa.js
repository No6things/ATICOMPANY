var app = angular.module("spa", []);
app.config(function($httpProvider) {
      //Add the header used to identify Hermes SPA app
      $httpProvider.defaults.headers.common= {'enterprise-token': 1};
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

app.controller("loginController", ['$scope', '$rootScope','$http',function ($scope, $rootScope, $http){
  $scope.submit= function () {
    var usuario = {
      login: $scope.correo,
      passwd: $scope.contrasena
    };
  	$http.post("http://localhost:3000/login",usuario).success( function(response) {
  												$rootScope.usuario= response.data;
                          $scope.correo='';
                          $scope.contrasena='';
  											})
  											.error(function() {
      											console.log("error");
  											});
  };

}]);