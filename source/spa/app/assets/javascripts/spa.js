(function(){

  function capitalize(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';  
  }

  var app = angular.module("spa", ['ngSanitize', 'ngCookies', 'funciones-operadores']);
  var remoteDomain = "http://localhost:3000/";

app.config(function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
      //Add the header used to identify Hermes SPA app
      $httpProvider.defaults.headers.common= {'enterprise-token': 1};
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

app.controller("loginController", ['$scope', '$rootScope', '$http', "$window", '$cookies',function ($scope, $rootScope, $http, $window, $cookies){
  $scope.submit= function () {
    var usuario = {
      login: $scope.correo,
      passwd: $scope.contrasena
    };
    
  	$http.post(remoteDomain+"login",usuario).success( function(response) {
			$rootScope.usuario= response.data;

      console.log($rootScope.usuario);      
      
      $scope.contrasena='';
      $cookies.nombre=$rootScope.usuario.nombre;
      $cookies.tipo=$rootScope.usuario.tipo_usuario.abreviacion;
      $cookies.api_token=$rootScope.usuario.api_token;
      $cookies.email = $rootScope.usuario.correo_electronico;
      $window.location=$window.location.pathname;
		})
		.error(function(response) {
				console.log(response);
		});
  };
}]);

app.controller("logoutController", ['$scope', '$http', '$window',function($scope, $http, $window){
  $scope.logout= function(){
    $http.delete(remoteDomain+"logout").success( function(response) {
                          $window.location=$window.location.pathname;
                        })
                        .error(function(response) {
                            console.log(response);
                        });
  };
}]);

app.controller("paqueteController", ['$scope', '$rootScope', '$http', '$window', '$cookies',function($scope, $rootScope, $http, $window, $cookies){
  $scope.search= function(){
    if ($scope.numero_guia!=''){

      $http.defaults.headers.get= {'api-token': $cookies.api_token};
      $http.get(remoteDomain+"operador/paquete/buscar?numero_guia="+$scope.numero_guia).success( function(response) {
                            $rootScope.resultado_busqueda=response.data;
                            $scope.numero_guia='';
                            $rootScope.tableHtml='<tr><th>Numero de Guia:</th> <td>'+response.data.paquete.numero_guia+'</td></tr>'+
                                                 '<tr><th>Agencia:</th> <td>'+response.data.agencia.nombre+'</td></tr>'+
                                                 '<tr><th>Fecha de Arribo:</th> <td>'+response.data.fecha_arribo+'</td></tr>'+
                                                 '<tr><th>Estado:</th> <td>'+response.data.tipo_estado.nombre+'</td></tr>'+
                                                 '<tr><th>Emisor:</th> <td>'+capitalize(response.data.paquete.emisor.nombre+' '+response.data.paquete.emisor.apellido)+'</td></tr>'+
                                                 '<tr><th>Receptor:</th> <td>'+capitalize(response.data.paquete.receptor.nombre+' '+response.data.paquete.receptor.apellido)+'</td></tr>'+
                                                 '<tr><th>Descripcion:</th> <td>'+response.data.paquete.descripcion+'</td></tr>'+
                                                 '<tr><th>Alto:</th> <td>'+response.data.paquete.alto+'</td></tr>'+
                                                 '<tr><th>Ancho:</th> <td>'+response.data.paquete.ancho+'</td></tr>'+
                                                 '<tr><th>Profundidad:</th> <td>'+response.data.paquete.profundidad+'</td></tr>'+
                                                 '<tr><th>Peso:</th> <td>'+response.data.paquete.peso+'</td></tr>'+
                                                 '<tr><th>Costo:</th> <td>'+response.data.paquete.costo+'</td></tr>';
                          })
                          .error(function(response) {
                              $scope.numero_guia='';
                              console.log(response);
                          });
    }
  };

  $scope.submit= function(){
    var paquete = new Object();
    paquete.agencia= parseInt($scope.agencia,10);
    paquete.alto= $scope.alto;
    paquete.ancho= $scope.ancho;
    paquete.profundidad= $scope.profundidad;
    paquete.peso= $scope.peso;
    paquete.costo= parseInt($('#newp_costo').val(),10);
    paquete.emisor= $scope.emisor;
    paquete.receptor= $scope.receptor;
    paquete.descripcion= $scope.descripcion;
    $http.defaults.headers.post= {'api-token': $cookies.api_token};
    $http.post(remoteDomain+"operador/paquete/crear",paquete,{headers: {'Content-Type': 'application/json'}}).success( function(response) {
                          alert("Enhorabuena, el paquete se ha creado.\nSu numero de guia es: "+response.data.numero_guia);
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
