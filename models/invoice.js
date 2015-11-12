var mongoose = require('mongoose');

var InvoiceSchema = new mongoose.Schema({
	customer: String,
	date: Date,
	invoiceNumber: Number,
	products: [{
		name: String,
		quantity: Number,
		price: Number,
		lineTotal: Number
	}],
	total: Number
});

mongoose.model('Invoice', InvoiceSchema)