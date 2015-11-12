This JavaScript web app (which uses Angular, Bootstrap, and Angular Material Design), allows a user to create an invoice.
Can specify name, date, invoice number, products (price & quantity), and the total cost. 

Search is enabled for the product name, can look inside the InvoiceController for a full, hard-coded product list to test the search out for. The Angular-Strap directive's (http://mgcrea.github.io/angular-strap/) typeahead functionality was used for the search bar.

When creating an invoice, it is saved using MongoDB. For testing purposes, I used Robomongo to test the successful storage of invoices to the server.

• To run locally: 'npm install' on your command line with the repository opened to isntall dependencies and 'npm start' to run it on localhost:3000/ on your web browser of choice.