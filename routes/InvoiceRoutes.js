var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Invoice = mongoose.model('Invoice');

//Post an invoice
router.post('/', function(req, res) {
	var invoice = new Invoice(req.body);
	invoice.save(function(err, invoice) {
		if(err) return res.status(500).send({err: "Issues with the server"});
		if(!invoice) return res.status(400).send({err: "Could not create invoice"});
		res.send(invoice);
	})
});

//Get a single invoice
var invoiceId = "";
router.get('/:id', function(req, res) {
	var invoiceId = req.params.id;
	Invoice.findOne({_id: invoiceId})
	.exec(function(err, result){
		if(err) return res.status(500).send({err: "The server is having issues."});
		if(!result) return res.status(400).send({err: "Could not get the invoice."});
		res.send(result);
		console.log(result)
	});
});

//Get every invoice
router.get('/', function(req, res) {
	Invoice.find({})
	.exec(function(err, invoice) {
		if(err) return res.status(500).send({err: "Error getting all invoices"});
		if(!invoice) return res.status(400).send({err: "Invoices do not exist"});
		res.send(invoice);
	});
});

//Delete an invoice
router.delete('/:id', function(req, res) {
	Invoice.remove({_id: req.params.id})
	.exec(function(err, invoice) {
		if(err) return res.status(500).send({err: "Error with deleting the invoice"});
		if(!invoice) return res.status(400).send({err: "Invoice does not exist"});
		res.send();
	})
})

module.exports = router;