(function(){
	
	var app = angular.module('funciones-operadores', ['spa']);
	var remoteDomain = "http://localhost:3000/";

	app.config(function($httpProvider) {
	    $httpProvider.defaults.headers.common= {'enterprise-token': 1};
	    $httpProvider.defaults.useXDomain = true;
	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});




})();