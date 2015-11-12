(function() {
	'use strict';
	angular.module('app')
	.factory('InvoiceFactory', InvoiceFactory);

	InvoiceFactory.$inject = ['$http', '$q'];

	function InvoiceFactory($http, $q) {
		var o = {};
		
		//Saving and posting an invoice
		o.createInvoice = function(invoice) {
			var q = $q.defer();
			$http.post('/api/invoice', invoice).success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		};

		//Gets an individual invoice for its own page
		o.getInvoice = function(id) {
			var q = $q.defer();
			$http.get('/api/invoice/' + id).success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		}

		//For displaying all invoices on Home page
		o.getInvoices = function() {
			var q = $q.defer();
			$http.get('/api/invoice/').success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		};

		//Delete an invoice from the Home page
		o.deleteInvoice = function(invoice) {
			var q = $q.defer();
			$http.delete('/api/invoice/' + invoice._id).success(function(res) {
				q.resolve(res);
			});
			return q.promise;
		};

		return o;
	}
})();