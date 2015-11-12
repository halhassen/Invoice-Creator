(function() {
	'use strict';
	angular.module('app')
	.controller('InvoiceController', InvoiceController);

	InvoiceController.$inject = ['InvoiceFactory', '$state', '$stateParams', '$timeout'];

	function InvoiceController(InvoiceFactory, $state, $stateParams, $timeout) {
		var vm = this;
		vm.invoice = {};
		vm.invoice.products = [];
		vm.singleInvoice = {};
		
		//Products that can be searched for
		vm.name = [
		"10' Axel", '.5" Washer', "Screwdriver", "Capsule", "Couch", "Jack", "Fastener", "Pins", "Lag Bolts", "Z Bolts", "Slotted Hex Nuts", "Wiring Clips", "Cable Wrap", "Expansion Plugs", "Flared Edge Clamps", "Blind Bolts", "1-Sided Trim Clips", "12 Point Flange Bolts", "ANSI Rings", "Carriage Bolts", "Castle Nuts", "Handles", "Hole Plugs", "Spacers", "Tube Clips", "Standoffs", "Riv Float Rivets", "Concealed Trim Clips", "Conduit", "Plow Bolts", "Strain Reliefs", "U-Type Speed Clips", "UniClamp Fittings", "Wind Turbine Fasteners"
		]

		//Create and save an invoice
		vm.createInvoice = function(invoice) {
			vm.invoice = invoice;
			console.log(vm.invoice)
			InvoiceFactory.createInvoice(vm.invoice).then(function(res) {
				delete vm.invoice;
				$state.go('Home');
				vm.invoice = {};
			})
		};

		//Delete an invoice
		vm.deleteInvoice = function(invoice) {
			InvoiceFactory.deleteInvoice(invoice).then(function(res) {
				vm.invoices.splice(vm.invoices.indexOf(invoice), 1);
			});
		};

		//Display invoices on home page
		vm.getInvoice = function() {
			if($stateParams.id){
				InvoiceFactory.getInvoice($stateParams.id).then(function(res) {
					vm.singleInvoice = res;
					console.log(vm.singleInvoice)
				});
			}
		}

		$timeout( function(){ vm.getInvoice(); }, 10);

		InvoiceFactory.getInvoices().then(function(res) {
			vm.invoices = res;
		});
		

		//Adding and removing line items for an invoice
		vm.addProduct = function() {
			var product = {}
			vm.invoice.products.push(product);	
		};

		vm.removeProduct = function(idx) {
			vm.invoice.products.splice(idx, 1);
		};

		//Finds the total sum of the inline product cost for the invoice
		vm.findSum = function() {
			vm.invoice.total = 0;
			for(var i = 0; i < vm.invoice.products.length; i++) {
				var product = vm.invoice.products[i];
				vm.invoice.products[i].lineTotal = product.price * product.quantity
				vm.invoice.total += vm.invoice.products[i].lineTotal;
			};
			return vm.invoice.total
		}
	}
})();