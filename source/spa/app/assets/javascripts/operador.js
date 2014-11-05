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
		var data = {
			email: 'o@m.com'
		};
		this.paquetes = {};
		$http.get(
			remoteDomain+'/operador/paquete/listar',
			data
		).success(function(d){
			console.log(d);
			c.paquetes = d;
		}).error(function(e){
			console.log(e);
		});
	}]);




})();