(function(){

  var app = angular.module("spa", []);
  var remoteDomain = "http://localhost:3000/";
  
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  app.config(function($httpProvider) {
      //Add the header used to identify Hermes SPA app
      $httpProvider.defaults.headers.common= {'enterprise-token': 1};
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

app.controller("loginController", ['$scope', '$rootScope', '$http', "$window",function ($scope, $rootScope, $http, $window){
  $scope.submit= function () {
    var usuario = {
      login: $scope.correo,
      passwd: $scope.contrasena
    };
  	$http.post(remoteDomain+"login",usuario).success( function(response) {
  												$rootScope.usuario= response.data;
                          $scope.correo='';
                          $scope.contrasena='';
                          setCookie('nombre',$rootScope.usuario.nombre,0.5);
                          setCookie('tipo',$rootScope.usuario.tipo_usuario.abreviacion,0.5);
                          setCookie('api_token', $rootScope.usuario.api_token,0.5);
                          $window.location=$window.location.pathname;
  											})
  											.error(function(response) {
      											console.log(response);
  											});
  };

}]);

  
})();
