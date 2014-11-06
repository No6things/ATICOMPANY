(function(){
	
	/*
	|
	| Definiciones previas para acceso a cookies y datos de usuario
	|
	*/
	var app = angular.module('funciones-operadores', ['mm.foundation']);
	var remoteDomain = "http://localhost:3000/";

	app.config(function($httpProvider) {
	    $httpProvider.defaults.headers.common= {'enterprise-token': 1};
	    $httpProvider.defaults.useXDomain = true;
	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});

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

	/*
	|
	| Driectivas y controladores
	|
	*/

	app.controller(
		'ModalInstanceCtrl',
		[
			'$scope',
			'$modalInstance',
			'$http',
			function($scope, $modalInstance, $http){
				$scope.paquetes = {};

				var email = getCookie('email');

				$http.defaults.headers.get= {'api-token': getCookie('api_token')};				
				$http(
					{
						method: 'GET',
						url: remoteDomain+'/operador/paquete/listar?email='+email					
					}).success(function(d){											
						$scope.paquetes = d.data.paquetes;
						console.log($scope.paquetes);
					}).error(function(e){
						console.log(e);
					});

				$scope.cancel = function () {
		  			$modalInstance.dismiss('cancel');
				};

				$scope.promoverPaquete = function (pq, ad){
				  	var pqad = {
				  		id: pq,
				  		agencia: ad
				  	};

					$http.defaults.headers.post= {'api-token': getCookie('api_token')};				
				  	$http.post(
				  		remoteDomain+"operador/paquete/cambiar_estado",
				  		pqad,
				  		{headers: {'Content-Type': 'application/json'}}
				  		).success( 
				  			function(pqt) {
				  				console.log(pqt);
				  				$('#paquete_'+pq).html('');
				  				$('#paquete_'+pq).removeClass();
				  				if (pqt.data.tipo_estado.abreviacion === 'R'){
				  					$('#paquete_'+pq).addClass("label danger small");
				  				}else if(
				  					pqt.data.tipo_estado.abreviacion === 'OT' || 
				  					pqt.data.tipo_estado.abreviacion === 'OA' ){
				  					$('#paquete_'+pq).addClass("label warning small");				  				
				  				}else if (pqt.data.tipo_estado.abreviacion === 'D'){
				  					$('#paquete_'+pq).addClass("label success small");
				  					$('#promover_'+pq).remove();
				  				}				  				
				  				$('#paquete_'+pq).html(pqt.data.tipo_estado.nombre);				  				
						}).error(
							function(e) {
								console.log(e);
						});
				};
			}
		]
	);

	app.controller(
		'ModalListarPaqueteController',
		[
			'$scope',
			'$modal',
			function($scope, $modal){
				$scope.open = function () {	
					$(document).foundation();				
					var modalInstance = $modal.open(
						{
			      			templateUrl: '/assets/listarpaquetes.html',
			      			controller: 'ModalInstanceCtrl'
		    			}
		    		);
				};
			}
		]
	);

	app.controller(
		'CambiarPasswordController',
		[
			'$scope',
			'$http',
			function($scope, $http){		

				var email = getCookie('email');
				
				$scope.submit = function(){
					var data = {
						email: email,
						password: $scope.contrasena
					};

					$http.defaults.headers.post= {'api-token': getCookie('api_token')};
					$http.post(
						remoteDomain+"operador/cambiar_password",
						data,
						{headers: {'Content-Type': 'application/json'}}
						).success(function(d){
							console.log(d);							
							$('#pass-change-form').trigger("reset");
							return true;
						}).error(function(e){
							console.log(e);
							return false;
						});
				};
			}
		]
	);

})();