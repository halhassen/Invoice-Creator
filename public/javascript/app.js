(function() {
	'use strict';
	angular.module('app', ['ui.router', 'fiestah.money', 'mgcrea.ngStrap', 'ngAnimate', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'InvoiceController',
			controllerAs: 'vm'
		}).state('Invoice', {
			url: '/createinvoice', 
			templateUrl: 'templates/invoice.html',
			controller: 'InvoiceController',
			controllerAs: 'vm'
		}).state('SingleInvoice', {
			url: '/invoice/:id',
			templateUrl: 'templates/singleinvoice.html',
			controller: 'InvoiceController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
