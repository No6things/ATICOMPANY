(function(){
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function deleteCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }


  var app = angular.module("spa", []);
  var remoteDomain = "http://localhost:3000/";

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


app.controller("logoutController", ['$scope', '$http',function($scope, $http){
  $scope.logout= function(){
    $http.defaults.headers.delete = {'api-token': getCookie('api_token')};
    $http.delete(remoteDomain+"logout").success( function(response) {
                          deleteCookie('nombre');
                          deleteCookie('tipo');
                          deleteCookie('api_token');
                          $window.location=$window.location.pathname;
                        })
                        .error(function(response) {
                            console.log(response);
                        });
  };
}]);

app.controller("paqueteController", ['$scope', '$http',function($scope, $http){
  $scope.submit= function(){
    var paquete = {
      agencia: parseInt($scope.agencia,10),
      alto: $scope.alto,
      ancho: $scope.ancho,
      profundidad: $scope.profundidad,
      peso: $scope.peso,
      costo: parseInt($('#newp_costo').val(),10),
      emisor: $scope.emisor,
      receptor: $scope.receptor,
      descripcion: $scope.descripcion
    };
    $http.defaults.headers.post= {'api-token': getCookie('api_token')};
    $http.post(remoteDomain+"operador/paquete/crear",paquete).success( function(response) {
                          alert("Enhorabuena, el paquete se ha creado");
                          $window.location=$window.location.pathname;
                        })
                        .error(function(response) {
                            console.log(response);
                        });
  };

  $http.get(remoteDomain+"agencia").success( function(response) {
                          $scope.agencias=response.data;
                        })
                        .error(function(response) {
                            console.log(response);
                        });


}]);











  
})();
