(function(){
	
	var app = angular.module('funciones-operadores', ['spa']);
	var remoteDomain = "http://localhost:3000/";

	app.config(function($httpProvider) {
	    $httpProvider.defaults.headers.common= {'enterprise-token': 1};
	    $httpProvider.defaults.useXDomain = true;
	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});

	app.controller('ListarPaquetesController', ['$http', function($http){

		var c = this;
		c.paquetes = {};
		/*
		| Carga de paquetes en modal de paquetes
		*/
		this.loadPaquetes = function(){
			var data = {
				email: 'o@m.com'
			};			
			$http.get(
				remoteDomain+'/operador/paquete/listar',
				data
			).success(function(d){
				console.log(d);
				c.paquetes = d;
			}).error(function(e){
				console.log(e);
			});
		}
	}]);




})();